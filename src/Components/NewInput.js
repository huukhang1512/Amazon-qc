import React from "react";
import { withRouter } from "react-router-dom";

//UI
import {
  Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton,
  Avatar, ListItemText, ListItem, Drawer, Menu, MenuItem, Fab
} from '@material-ui/core';
import { Close, ContactSupport } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu'
import { styles } from "./UIComponents"
class NewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: false,
      productList: ["Airpod", "Apple Airpod", "Apple Airpod 1", "Apple Airpod 2"],
      navigation: ["About", "Quality Control", "Train the model", "Help"],
      show: false,
      anchorEl: null
    };
  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  };
  orderPlaced = () => {
    this.setState({ show: true })
  }
  componentDidUpdate() {
    if (this.state.show) {
      this.props.history.push("/process")
    }
  }
  toggleDrawer = open => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ up: open });
  };
  handleOnClickScroll = (content) => {
    switch (content) {
      case ("Quality Control"):
        this.props.history.push("/input");
        break;
      case ("About"):
        this.props.history.push("/about");
        break;
      case ("Train the model"):
        this.props.history.push("/train");
        break;
      case ("Help"):
        this.props.history.push("/help");
        break;
    }
  }
  componentDidMount() {
    console.log(window.innerWidth)
  }
  render() {
    const { productList, navigation, up, anchorEl } = this.state
    const { classes } = this.props
    const date = new Date()
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
            <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color: "#edeaea" }} onClick={this.handleClick}>
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
            <MenuIcon onClick={this.toggleDrawer(true)} className={classes.menuButton} />
          </div>
        </AppBar>
        <div className={classes.mappingItemContainer}>
          <h2 style={{ textAlign: "left", width: "400px" }}>Order awaiting quality control
            </h2>
          <Tooltip placement="bottom" arrow title={<Typography>Refer to the live quality control testing of randomly selective order, click 'Scan this order' to proceed</Typography>} open={true} >
            <div>
              {productList.map((p, i) => (
                <div key={i} className={classes.cardContainer}>
                  <Card variant="outlined" className={classes.card}>
                    <CardHeader className={classes.cardHead}
                      title={p}
                      avatar={<Avatar><img alt="airpod" src="https://i1.pngguru.com/preview/378/338/511/apple-airpods-headphones-wireless-iphone-elago-usams-bluetooth-apple-airpods-2-png-clipart.jpg" style={{ width: "40px", height: "40px" }} ></img></Avatar>}
                      subheader={date.getFullYear()}
                      action={<Button className={classes.button} onClick={() => { this.orderPlaced() }}>Scan this order</Button>}
                    >
                    </CardHeader>
                  </Card>
                  <span className={classes.breaker}></span>
                </div>
              ))}
            </div>
          </Tooltip>
          <Tooltip title="Click to get support from our chatbot !" placement="left">
            <Fab variant="extended" color="primary" aria-label="add" className={classes.speedDial}>
              <ContactSupport style={{ marginRight: 1 }} />
            Chatbot
          </Fab>
          </Tooltip>
        </div>
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(NewInput));

