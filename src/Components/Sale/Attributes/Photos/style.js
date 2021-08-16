import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   backgroundColor: "red",
      marginBottom: "23px"
    }
  },
  parentContainer: {
    //   backgroundColor:"Green",
  },

  lis: {
    display: "inline"
  }
  ,
  // PhotosHeading: {
  //   marginTop: "10px",
  //   marginBottom: "15px"
  // },
  
  divs: {
    float: "left",
    width: "200px",
    height: "80px",
    margin: "10px",
    padding: "10px",
    border: "1px solid black"
  }
  ,
  input: {
    display: "none"
    
  },
  img: {
    height: "100px",
    width: "90px",
    //  border: "1px solid black"
    outlineColor: "coral"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
