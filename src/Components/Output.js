import React from "react";
import { withRouter } from "react-router-dom";

//UI
// import Alert from '@material-ui/lab/Alert';
import {Button,Card,CardHeader,Avatar} from '@material-ui/core';
import {CheckCircleOutline} from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./UIComponents"
class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ["Airpod"],
    };
  }

  render() {
    const {productList} = this.state
    const { classes } = this.props
    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <div className={classes.inputField}>
          <h1 style={{ textAlign: "center", width: "100%" }}>Scan for flaws result</h1>
          <CheckCircleOutline style={{width : "400px", height : "400px", color : "#006000"}}/>
          <h1>This product has passed the 2nd QC,<br/> proccess to the SLAM department</h1>
          <div className={classes.mappingItemContainer}>
          {productList.map((p, i) => (
            <div key={i} className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card} style={{paddingRight : 0}}>
                <CardHeader className={classes.cardHead}
                  title={p}
                  subheader={`${date.getDate()} ${month} ${date.getFullYear()}`}
                  avatar={<Avatar><img alt="airpod" src="https://i1.pngguru.com/preview/378/338/511/apple-airpods-headphones-wireless-iphone-elago-usams-bluetooth-apple-airpods-2-png-clipart.jpg" style= {{width : "40px",height : "40px"}} ></img></Avatar>}
                >
                </CardHeader>
                <Button style={{width : "100%"}} onClick ={()=>{this.props.history.push("/")}}>
                  Return to Main Menu
                </Button>
              </Card>
              <span className={classes.breaker}></span>
            </div>
          ))}
          </div>
          <br />
        </div>
    )
  }
}
export default withRouter(withStyles(styles)(Output));
