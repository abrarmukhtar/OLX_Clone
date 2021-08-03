import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    fontFamily: "Lato",
    margin: "2em",
    fontSize: "1.4em",
    border: "1px solid black"
  },
  root: {
    flexGrow: 1,
    height: "15vh"
  },
  addDate: {
    backgroundColor: "#F7F9F8",
    textAlign: "center",
    borderLeft: "5px solid #2CE4E2"
  },
  fromDate: {
    marginTop: "30px"
  },
  adTitleHeding: {
    marginLeft: "15px",
    marginTop: "20px",
    padding: "10px"
  },
  adViewFavourite: {
    marginLeft: "15px",
    padding: "10px"
  },
  btnActive: {
    marginTop: "35px",
    backgroundColor: "#2CE4E2",
    boxShadow: "none",
    color: "black",
    borderRadius: "50px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
