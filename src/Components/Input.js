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
class Input extends React.Component {
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
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="25px" height="25px" className={classes.logo} alt ="logo"></img>
            <IconButton style={{ borderRadius: 0 }}>
              <Typography variant ="body2" className={classes.appBarText}>Commit to buy</Typography>
            </IconButton>
          </div>
        </AppBar>
        <div className={classes.mappingItemContainer}>
          {productList.map((p, i) => (
            <div key={i} className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card}>
                <CardHeader className={classes.cardHead}
                  title={p}
                  subheader={date.getFullYear()}
                  action={<Button onClick={()=>{this.props.history.push("/process")}}>Place an order</Button>}
                  >
                </CardHeader>
              </Card>
              <span className={classes.breaker}></span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(Input));
