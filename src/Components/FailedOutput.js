import React from "react";
import { withRouter } from "react-router-dom";

//UI
// import Alert from '@material-ui/lab/Alert';
import { Clear } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./UIComponents"
import { throttle } from "lodash";
class FailedOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeOut: 5000
        }
    }
    rerunTheTest = () => {
        window.location.reload()
        clearInterval()
    }
    countDown = () => {
        this.setState({
            timeOut: this.state.timeOut - 1000
        })
    }
    componentDidMount() {
        setInterval(()=>{this.countDown()}, 1000)
        setTimeout(() => { this.rerunTheTest() }, 5000)
    }
    render() {
        const { timeOut } = this.state
        const { classes } = this.props
        return (
            <div className={classes.inputField}>
                <Clear style={{ width: "400px", height: "400px", color: "#c91c1c" }} />
                <h1>The product has failed the 2nd QC, picking another product and re-run the test in... {timeOut / 1000}</h1>
            </div>
        )
    }
}
export default withRouter(withStyles(styles)(FailedOutput));
