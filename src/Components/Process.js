import React from "react";
import { withRouter } from "react-router-dom";
import Output from "./Output"
import FailedOutput from "./FailedOutput"
import * as tmImage from '@teachablemachine/image';
import { URL } from "../config";
//UI
import {
  Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton, MobileStepper,
  CircularProgress, Avatar, ListItemText, ListItem, Drawer, Fab, Menu, MenuItem
} from '@material-ui/core';
import { Close,ContactSupport } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import { throttle } from "lodash";
import MenuIcon from '@material-ui/icons/Menu'
import { styles } from "./UIComponents"

let loop;
class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ["Airpod"],
      model: null,
      up: false,
      webcam: null,
      flaw: 0,
      perfect: 0,
      sensitivity: 0.8,
      message: null,
      done: false,
      navigation: ["About", "Quality Control", "Train the model", "Help"],
      success: null,
      canQuit: false,
      labelContainer: null,
      anchorEl: null
    };
    this.is_mounted = false
    this.webcamContainer = React.createRef();
    this.loop = this.loop.bind(this)

  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  };
  toggleDrawer = open => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ up: open });
  };
  handleOnClickScroll = (content) => {
    switch (content) {
      case("Quality Control"):
      this.props.history.push("/input");
      break;
    case("About"):
      this.props.history.push("/about");
      break;
    case("Train the model"):
      this.props.history.push("/train");
      break;
    case("Help"):
      this.props.history.push("/help");
      break;
    }
  }
  async setupModel() {
    //store the prediction callback function
    if (this.state.flaw === 5 || this.state.perfect === 30) {
      return;
    }
    const modelURL = `${URL}model.json`;
    const metadataURL = `${URL}metadata.json`;
    console.log(this.is_mounted)
    this.setState({
      model: await tmImage.load(modelURL, metadataURL),
      webcam: new tmImage.Webcam(300, 300, true)
    })
    if (this.is_mounted === true) {
      this.setState({
        maxPredictions: this.state.model.getTotalClasses(),
        done: true,
      })
      await this.state.webcam.setup().then(() => console.log("enabled")).catch((err) => { console.log(err); this.setState({ webcam: null }) })
      // .catch (this.setState({ webcam: null })); // request access to the webcam
      if (this.state.webcam !== null) {
        this.state.webcam.play()
        this.setState({
          canQuit: true
        })
        loop = window.requestAnimationFrame(this.loop);
        this.webcamContainer.current.appendChild(this.state.webcam.canvas)
      }
    }
  }

  async loop() {
    if (this.state.webcam !== null) {
      this.state.webcam.update();
      await this.predict();
      loop = window.requestAnimationFrame(this.loop);
    }
    if (this.state.flaw === 5 || this.state.perfect === 30) {
      return;
    }
  }

  async predict() {
    const { model } = this.state;
    if (this.state.webcam.canvas === undefined) {
      return;
    }
    const prediction = await model.predict(this.state.webcam.canvas);

    for (let i = 0; i < this.state.maxPredictions; i++) {
      // const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      this.setState({
        labelContainer: prediction[i].probability.toFixed(2),
      })
    }
    this.count(prediction)
  }

  changePosition() {
    if ((this.state.flaw % 5 === 0 && this.state.flaw !== 0 && this.state.flaw <= 5) || (this.state.perfect % 5 === 0 && this.state.perfect !== 0 && this.state.perfect <= 30)) {
      this.state.webcam.stop()
      this.setupModel()
      this.setState({
        message: "Please rotate the product to check the other sides!"
      }, () => {
        setTimeout(() => {
          this.setState({ message: null })
        }, 1500)
      })
    }
    else {
      return;
    }

  }

  count = throttle((data) => {
    data.forEach(({ className, probability }) => {
      if (this.state.perfect === 30) {
        this.setState({ success: true })
        return;
      }
      if (this.state.flaw === 5) {
        this.setState({ success: false })
        return;
      }
      if (probability > this.state.sensitivity) {
        if (className === "Flaw Airpod") {
          this.setState({
            flaw: this.state.flaw + 1,
          });
        }
        if (className === "Normal Airpod") {
          this.setState({
            perfect: this.state.perfect + 1,
          });
        }
        this.changePosition()
      }
    })
  }, 1500)

  componentDidMount() {
    this.is_mounted = true
    this.is_mounted && this.setupModel()
  }
  componentWillUnmount() {
    if (this.state.webcam && (this.state.flaw !== 5 && this.state.perfect !== 30)) {

      this.state.webcam.stop()
    }
    if (this.state.flaw === 5 || this.state.perfect === 30) {
      return;
    }
    this.is_mounted = false
  }

  renderResult() {
    const { productList, labelContainer, perfect, flaw, success, message } = this.state
    const { classes } = this.props
    const date = new Date()
    switch (success) {
      case null:
        return (<div className={classes.mappingItemContainer}>
          <h1 style={{ textAlign: "left", width: "100%" }}>Scanning page</h1>
          {productList.map((p, i) => (
            <div key={i} className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card}>
                <CardHeader className={classes.cardHead}
                  title={p}
                  avatar={<Avatar><img alt="airpod" src="https://i1.pngguru.com/preview/378/338/511/apple-airpods-headphones-wireless-iphone-elago-usams-bluetooth-apple-airpods-2-png-clipart.jpg" style={{ width: "40px", height: "40px" }} ></img></Avatar>}
                  subheader={date.getFullYear()}
                >
                </CardHeader>
              </Card>
              <span className={classes.breaker}></span>
            </div>
          ))}
          <br />
          {this.state.webcam !== null ? (
            labelContainer > this.state.sensitivity ? (
              <p className={classes.checking}>Cannot find any product! <br /> Please place the product inside the scanning panel</p>) : (
                <p className={classes.checking}>Checking the flawlessness of the product...</p>
              )
          ) : (
              <p className={classes.checking}>Please enable your webcam to test this application !</p>
            )}
          <Tooltip title={<Typography>To get started, place the AirPod inside the scanning panel</Typography>} arrow open={perfect === 0 && flaw === 0}>
            <div ref={this.webcamContainer} style={{ paddingTop: 20 }}>
            </div>
          </Tooltip>
          {message}

          <div className={classes.progressContainer}>
            <MobileStepper
              variant="progress"
              steps={30}
              position="static"
              backButton={`Perfect`}
              nextButton={`${perfect}/30`}
              className={classes.progress}
              activeStep={perfect}
            />
            <MobileStepper
              variant="progress"
              steps={5}
              className={classes.flawProgress}
              backButton={"Flaw"}
              nextButton={<p style={{ marginRight: 10 }}>{flaw}/5</p>}
              position="static"
              activeStep={flaw}
            />
          </div>

        </div>)
      case true:
        window.cancelAnimationFrame(loop)
        return (<Output></Output>)
      case false:
        window.cancelAnimationFrame(loop)
        return (<FailedOutput />)
      default:
        break;
    }
  }
  goHome() {
    if (this.state.canQuit) {
      this.props.history.push("/")
    }
  }
  render() {
    const { done, up, navigation,anchorEl } = this.state
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed" style={{ backgroundColor: "#333333" }}>
          <Drawer anchor="top" open={up} onClose={this.toggleDrawer(false)} style={{ color: "#333333" }}
            classes={{ paper: classes.drawer }}>
            <ListItem className={classes.topDrawer}>
              <ListItemText primary={<Typography variant="h5">Navigation</Typography>} style={{ fontWeight: "bold" }}></ListItemText>
              <Tooltip title="Close" arrow>
                <IconButton onClick={this.toggleDrawer(false)}>
                  <Close style={{ color: "#edeaea" }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            {navigation.map((f, i) => (
              <ListItem button className={classes.members} key={i} style={{ paddingRight: 40 }} onClick={() => this.handleOnClickScroll(f)}>
                <ListItemText primary={<Typography variant="subtitle1">{f}</Typography>}>
                </ListItemText>
              </ListItem>
            ))}
          </Drawer>
          <div className={classes.headerText}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="25px" height="25px" className={classes.logo} alt="logo" onClick={() => { this.props.history.push("/") }}></img>
            {navigation.map((e, i) =>
              <IconButton style={{ borderRadius: 0 }} key={i} onClick={() => this.handleOnClickScroll(e)}>
                <Typography variant="body2" className={classes.appBarText}>{e}</Typography>
              </IconButton>)}
          </div>
          <div className={classes.headAvatarContainer}>
          <Button aria-controls="simple-menu" aria-haspopup="true" style={{color : "#edeaea"}} onClick={this.handleClick}>
              English (Default)
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>English</MenuItem>
              <MenuItem onClick={this.handleClose}>Vietnamese</MenuItem>
              <MenuItem onClick={this.handleClose}>Indonesian</MenuItem>
              <MenuItem onClick={this.handleClose}>Nepali</MenuItem>
            </Menu>
            <Button className={classes.button} style={{ margin: 0 }}>Sign in</Button>
            <Menu onClick={this.toggleDrawer(true)} className={classes.menuButton} />
          </div>
        </AppBar>
        {done ? (<div>{this.renderResult()} <Tooltip  title="Click to get support from our chatbot !" placement ="left">
            <Fab variant="extended" color ="primary"aria-label="add" className = {classes.speedDial}>
            <ContactSupport style={{marginRight : 1}}/>
            Chatbot
          </Fab>
          </Tooltip></div>) : (
          <div className={classes.loaderContainer}>
            <CircularProgress className={classes.loader} />
            <p>Loading the model</p>
          </div>
        )}
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(Process));
