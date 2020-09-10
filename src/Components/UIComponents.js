export const styles = theme => ({
    root: {
      background : "#edeaea",
      width:"100vw",
      height:"100vh",
      display : "flex",
      flexDirection: "column",
      position : "absolute",
      overflowX : "hidden",
    },
    inputField: {
        height: '100vh',  
        width: '100vw',
        position: "fixed",
        alignItems: 'center',
        top : "15%",
    },
    progress: {
      backgroundColor : "#edeaea",
      maxWidth : "90%",
      flexGrow: 1,
    },
    checking:{
      marginBottom : 10, 
    },
    flawProgress:{
      backgroundColor : "#edeaea",
      maxWidth : "90%",
      marginLeft : 8,
      flexGrow: 1
    },
    progressContainer:{
      display : "flex",
      marginTop : "10%",
      marginLeft : "10%",
      width : "90%",
      flexDirection: "column",
      position :"relative",
    },
    inputName:{
      color : "white",
      borderColor: '#edeaea',
    },
    inputId: {
        height : 57,
        borderRadius : "1em",
        background : "#f9f9f9",
        padding : "0 15px",
        boxShadow: '5px 5px 5px 0 rgba(0,0,0,.3)',
        justifyContent : "center",
        width : 450,
        [theme.breakpoints.down('sm')]: {
          width : 300,
        },
        [theme.breakpoints.down('md')]: {
          width : 350,
        },
      },
    card:{
      backgroundColor : "#f9f7f7",
      paddingRight: "10px",
      textAlign : "left",
    },
    avatar:{
      color: "#333333",
      cursor : "pointer"
    },
    drawer:{
      display : "flex",
      flexDirection: "column",
      justifyContent : "center",
      textAlign : "center",
      background : "#333333",
      color : "#edeaea",
    },
    mappingItemContainer:{
      margin : "auto",
      overflowY: "auto",
      paddingRight : 9,
      paddingTop : 12,
      display : "flex",
      flexDirection: "column",
      position :"relative",
      height : "87vh",
      width: "50vw",
      [theme.breakpoints.down('sm')]: {
        width : "90vw",
        height : "85vh"
      },
    },
    header: {
      display : "inline",
      justifyContent: "center",
      backgroundColor: "#edeaea",
      width : "100%",
    },
    headAvatar:{
      color : "#333333",
      cursor : "pointer"
    },
    headAvatarContainer:{
      margin: theme.spacing(1.5),
      display : "flex",
      flexDirection : "row",
      float : "right"
    },
    logo :{
      marginRight : "5px",
      padding : 10,
      cursor : "pointer",
      display : "inline-block",
    },
    headerText :{
      height : 46,
      position : "relative",
      margin : theme.spacing(1),
      display : "flex",
      flexDirection : "row",
      float : "left",
    },
    shareIcon: {
      cursor : "pointer",
      float : "left",
      display : "inline-block",
    },
    members : {
      height : "60px"
    },
    bottomNav: {
      bottom : 0,
      left : 0,
      right : 0,
      position : "fixed",
    },
    idInputLogo :{
        cursor : "pointer",
    },
    buttonDrawer:{
      width : "100%",
    },
    button: {
      border: 0,
      borderRadius: 10,
      color: '#b57129',
      height: 40,
      fontWeight: "bolder",
      padding: '0 25px',
      margin : "20px 20px",
      '&:hover' : {
        boxShadow: '5px 5px 5px 0 rgba(0,0,0,.3)',
      },
      [theme.breakpoints.down('sm')]: {
        margin : 20
      },
    },
    cardModeIcon:{
      width : "100px",
      height : "100px",
      cursor : "pointer",
      [theme.breakpoints.down('sm')]: {
        width : "65px",
        height : "65px"
      },
    },
    cardMode:{
      display: "inline-block",
      position: "relative",
      minHeight : "200px",
      maxHeight : "250px",
      minWidth : "200px",
      maxWidth : "250px",
      '&:hover' : {
        boxShadow: '5px 5px 5px 0 rgba(0,0,0,.3)',
      },
      fontWeight: "bolder",
      borderRadius : "1em",
      margin : "5%",
      cursor : "pointer",
      [theme.breakpoints.down('sm')]: {
        minHeight : "150px",
        maxHeight : "200px",
        minWidth : "150px",
        maxWidth : "200px",
      },
    },
    cardModeContent:{
      marginTop : "15%",
      [theme.breakpoints.down('sm')]: {
        fontSize : "17px"
      },
    },
    modeContainer:{
      display : "flex",
      flexDirection : "row",
      alignItems: "center",
      justifyContent: "center",
      position :"fixed",
      overflowX : "auto",
      height : "90vh",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        flexDirection : "column",
      },
    },
    topDrawer:{
      height : "80px"
    },
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    slider:{
      position: 'fixed',
      width : "35vw",
      alignItems : "center",
      bottom : "1%",
      right : "30%",
      [theme.breakpoints.down('sm')]: {
        alignItems : "left",
        left : "10%",
      },
    },
    undoRedo:{
      display : "inline",
      backgroundColor : "#FFFFFF",
      alignItems : "left",
      position: 'fixed',
      bottom : 16,
      borderRadius : 25,
      width : 100,
      boxShadow: '2px 2px 2px 0 rgba(0,0,0,.3)',
      right : theme.spacing(11),
    },
    form:{
      padding : 20
    },
    speedDialIcon:{
      background : 'linear-gradient(45deg, #545454 30%, #333333 90%)' 
    },
    bottomDrawer:{
      bottom : 0,
      position : "fixed",
    },
    bottomButton: {
      background: 'linear-gradient(45deg, #545454 30%, #333333 90%)',
      color: 'white',
      fontWeight: "bolder",
      width: "100%",
      height : "55px",
    },
    loader:{
      color : "#333333"
    },
    loaderContainer:{
      backgroundColor : "#edeaea",
      alignItems: "center",
      justifyContent: "center",
      height : "100vh",
      width : "100vw",
      display : "flex",
      flexDirection: "column",
    },
    //Q&A
    checkBoxArea:{
      borderRadius : "1em 0em 0em 0em",
      position : "relative",
      height : 40,
      padding : "0px 10px 0px 10px",
      color : "#edeaea",
      float : "right",
      backgroundColor : "#545454",
      borderBottom : "0.5px solid #edeaea"
    },
    checkBox:{
      position : "relative",
    },
    quesSend:{
      textAlign : "center",
      display: 'flex',
      margin : 'auto',
      flexDirection: "column",
      position : "relative",
      width : "100%",
      },
    inputQues:{
      position : "relative",
      color : "white",
      padding : 10,
      backgroundColor : "#545454",
      justifyContent : "center",
      overflowX : "hidden",
      maxHeight: "30vh",
    },
    cardHead:{
        borderBottom: "1px solid #edeaea"
      },
    cardContainer:{
      overflowX : "hidden",
      marginBottom : 15,
      borderRadius : "1em",
      boxShadow: '4px 4px 4px 0 rgba(0,0,0,.3)',
    },
    appBar: {
      textAlign : "right",
      position : "sticky",
      display : "inline",
      justifyContent: "center",
      backgroundColor: "#edeaea",
      width : "100%",
    },
    name:{
      display : "inline-block",
      color : "#333333",
      margin : "14px 0px 17px 0px",
      width : "80vw",
    },
    //canvas Mode
    canvas : {
      bottom : 0,
      position : "fixed",
      backgroundColor: "#edeaea",
      display : "block",
      overflow : "auto",
    },
    appBarButton: {
      margin : "10px",
      color : "#333333",
      float : "right",
    },
    createRoomButton:{
      marginTop : "10%",
      marginBottom : "5%",
      position : "sticky",
      [theme.breakpoints.down('sm')]: {
        marginTop : "20%",
      },
    },
    homeLogo :{
      marginRight : 38,
    },
    logoContainer :{
      width : '100vw',
      top : "25%",
      position: "absolute",
      backgroundColor : "#edeaea",
      alignItems: 'center',
    },
    joinButton: {
      color: '#232323',
      backgroundColor: "#edeaea",
      paddingBottom : 10,
      width : "100%",
      fontWeight: "bold",
    },
    appBarText:{
      margin : "0 12px",
      cursor : "pointer", 
      color : "#848484",
      [theme.breakpoints.down('sm')]: {
        display : "none" 
      },
      '&:hover' : {
        color : "#edeaea"
      },
    },
    redirectButton:{
      borderRadius :"25em",
      padding :"10px 40px",
      display : "flex",
      marginTop : "3em",
      width : "400px",
      color : "#edeaea",
      background : 'linear-gradient(45deg, #545454 30%, #333333 90%)',
    },
    container:{
      padding: "7em 0",
      background : 'linear-gradient(45deg, #545454 60%, #333333 40%)',
      opacity : "20%",
      [theme.breakpoints.down('sm')]: {
        padding: "5em 0",
      },
    },
    containerLogo:{width : "30%", [theme.breakpoints.down('sm')]: {
      width : "60%"
    },},
    introMode:{
      width : "90vw",
      margin : "4%",
      display : "flex",
      flexDirection: "row",
      [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        margin : "1%",
      },
    },
    introModeChild:{
      margin : "5%",
      marginTop : "10%",
      width : "35%",
      [theme.breakpoints.down('md')]: {
        width : "85vw",
      },
    },
    modeDemo:{
      width : "45vw",
      float : "right",
      borderRadius : "1em",
      [theme.breakpoints.down('md')]: {
        width : "90vw",
        marginLeft : "2em",
        float : "none"
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft : "1em",
        width : "85vw",
        float : "none",
      },
    },
    tooltip:{
      [theme.breakpoints.down('md')]: {
        display : "none"
      },
    },
    headingText:{
      color : "#535353",
      fontWeight: "bold",
    },
    featureContainer:{
      position : "relative",
      padding : 10,
      background : "#DEDBDC",
    },
    menuButton:{
      display : "none",
      cursor : "pointer",
      margin : 5,
      color : "#edeaea",
      [theme.breakpoints.down('sm')]: {
        display : "inline"
      },
    },
    divider:{
      color : "#edeaea",
      [theme.breakpoints.down('sm')]: {
        display : "none"
      },
    },
    aboutContainer:{
      color : "#edeaea",
      bottom : 0,
      width : "100vw",
      flewGrow: 1,
      left : 0,
      background : "#333333",
    },
    about :{
      padding : "2em"
    },
    alert :{
      position : "relative",
      margin : 15,
      zIndex: 1000,
      boxShadow: '5px 5px 5px 0 rgba(0,0,0,.3)',
      borderRadius : "1em"
    },
  });