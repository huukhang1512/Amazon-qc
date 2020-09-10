import React from "react";
import { withRouter } from "react-router-dom";

//UI
import {
    Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton,
    Avatar, ListItemText, ListItem, Drawer, Divider, Paper, Grow, Container
} from '@material-ui/core';
import { CheckCircleOutline, LinkedIn, Mail, Menu, Close } from '@material-ui/icons';
// import Alert from '@material-ui/lab/Alert';
// import {Close,Share,FileCopyOutlined, Refresh} from '@material-ui/icons';\
import { withStyles } from "@material-ui/core/styles";
import { throttle } from "lodash";
import { styles } from "./UIComponents"
class TrainTheModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            up: false,
            navigation: ["About", "Quality Control", "Train the model", "Help"],
            show: false,
        };
    }

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
    render() {
        const { navigation, up } = this.state
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
                        <Button className={classes.button} style={{ margin: 0 }}>Sign in</Button>
                        <Menu onClick={this.toggleDrawer(true)} className={classes.menuButton} />
                    </div>
                </AppBar>
                <Grow in>
                    <div className={classes.mappingItemContainer}>
                        <h1 style={{ textAlign: "center", width: "100%" }}>Train the model</h1>
                        <Typography variant="subtitle1" align="justify" paragraph>
                            This machine learning model is built using TeachableMachine library by Google, a library based on Tensorflow.js. For more information please click the button below.
                    </Typography>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <Button className={classes.redirectButton} variant="contained" onClick={() => window.location.href = "https://teachablemachine.withgoogle.com/"}>
                                <Typography variant="subtitle2">Go to site for train the model</Typography>
                            </Button>
                        </div>
                    </div>
                </Grow>
            </div>
        )
    }
}
export default withRouter(withStyles(styles)(TrainTheModel));

