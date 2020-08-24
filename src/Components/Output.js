import React from "react";
import { withRouter } from "react-router-dom";

//UI
// import Alert from '@material-ui/lab/Alert';
import {Button} from '@material-ui/core';
import {CheckCircleOutline} from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./UIComponents"
class Output extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.inputField}>
          <CheckCircleOutline style={{width : "400px", height : "400px", color : "#006000"}}/>
          <h1>The product has passed the 2nd QC, proccess to the SLAM department</h1>
          <Button className={classes.button} onClick={() => this.props.history.push("/")}>Home</Button>
        </div>
    )
  }
}
export default withRouter(withStyles(styles)(Output));
