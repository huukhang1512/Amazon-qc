import React from "react";
import { withRouter } from "react-router-dom";
import Output from "./Output"
import FailedOutput from "./FailedOutput"
import * as tmImage from '@teachablemachine/image';
import { URL } from "../config";
//UI
import {
  Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton,
  Radio, RadioGroup, FormControlLabel, FormControl, TextField,
  Avatar, ListItemText, ListItem, Drawer, Divider, Collapse, Paper
} from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
import { Send } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import { throttle } from "lodash";
import { styles } from "./UIComponents"

let loop;
class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ["Airpod"],
      model: null,
      webcam: null,
      last: null,
      flaw: 0,
      perfect: 0,
      sensitivity: 0.7,
      success: null,
      labelContainer: null,
    };
    this.is_mounted = false
    this.webcamContainer = React.createRef();
    this.loop = this.loop.bind(this)
    
  }

  async setupModel() {
    //store the prediction callback function
    if (this.state.flaw === 5 || this.state.perfect === 10) {
      return;
    }
    const modelURL = `${URL}model.json`;
    const metadataURL = `${URL}metadata.json`;
    console.log(this.is_mounted)
      this.setState({
        model: await tmImage.load(modelURL, metadataURL),
        webcam: new tmImage.Webcam(200, 200, true)
      })
    if (this.is_mounted === true ) {
      this.setState({
        maxPredictions: this.state.model.getTotalClasses(),
      })
      await this.state.webcam.setup(); // request access to the webcam
      this.state.webcam.play();
      loop = window.requestAnimationFrame(this.loop);
      this.webcamContainer.current.appendChild(this.state.webcam.canvas);
    }
  }

  async loop() {
    if (this.state.webcam !== null) {
      this.state.webcam.update();
      await this.predict();
      loop = window.requestAnimationFrame(this.loop);
    }
    if (this.state.flaw === 5 || this.state.perfect === 10) {
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
      const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      this.setState({
        labelContainer: classPrediction,
      })
    }
    this.count(prediction)
  }

  changePosition() {
    if ((this.state.flaw % 5 === 0 && this.state.flaw !== 0 && this.state.flaw <= 5) || (this.state.perfect % 5 === 0 && this.state.perfect !== 0 && this.state.perfect <= 10)) {
      this.state.webcam.stop()
      this.setupModel()
    }
    else {
      return;
    }

  }

  count = throttle((data) => {
    data.forEach(({ className, probability }) => {
      if (this.state.perfect === 10) {
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
    if (this.state.webcam && (this.state.flaw !== 5 && this.state.perfect !== 10) ) {
      this.state.webcam.stop()
    } 
    if (this.state.flaw === 5 || this.state.perfect === 10){
      return;
    }
    this.is_mounted = false
  }

  renderResult() {
    const { productList, labelContainer, perfect, flaw, success } = this.state
    const { classes } = this.props
    const date = new Date()
    switch (success) {
      case null:
        return (<div className={classes.mappingItemContainer}>
          {productList.map((p, i) => (
            <div key={i} className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card}>
                <CardHeader className={classes.cardHead}
                  title={p}
                  subheader={date.getFullYear()}
                >
                </CardHeader>
              </Card>
              <span className={classes.breaker}></span>
            </div>
          ))}
          <br />
          <div ref={this.webcamContainer}></div>
          <p>{labelContainer}</p>
          <p>Number of flaw {flaw}</p>
          <p>Number of perfect {perfect}</p>
        </div>)
      case true:
        window.cancelAnimationFrame(loop)
        return (<Output></Output>)
      case false:
        window.cancelAnimationFrame(loop)
        return (<FailedOutput/>)
      default:
        break;
    }
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed" style={{ backgroundColor: "#333333" }}>
          <div className={classes.headerText}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="25px" height="25px" alt="logo" className={classes.logo}></img>
            <IconButton style={{ borderRadius: 0 }}>
              <Typography variant="body2" className={classes.appBarText}>Quality Control</Typography>
            </IconButton>
          </div>
        </AppBar>
        {this.renderResult()}
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(Process));
