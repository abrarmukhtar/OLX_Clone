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
  // PhotosHeading: {
  //   marginTop: "10px",
  //   marginBottom: "15px"
  // },
  input: {
    display: "none"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
