import React from "react";
import { withRouter } from "react-router-dom";

//UI
import {
  Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton,
  Avatar, ListItemText, ListItem, Drawer, Divider, Collapse, Paper
} from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
// import {Close,Share,FileCopyOutlined, Refresh} from '@material-ui/icons';\
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./UIComponents"
class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ["Airpod"]
    };
  }

  render() {
    const { productList } = this.state
    const { classes } = this.props
    const date = new Date()
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position ="fixed" style={{ backgroundColor: "#333333" }}>
          <div className = {classes.headerText}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="25px" height="25px" className={classes.logo}></img>
            <IconButton style={{ borderRadius: 0 }}>
              <Typography variant ="body2" className={classes.appBarText}>Return process</Typography>
            </IconButton>
          </div>
        </AppBar>
        <div className={classes.mappingItemContainer}>
          
        </div>
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(Output));
