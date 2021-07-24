import { makeStyles } from "@material-ui/core/styles";
export const UseStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    hedings:{
        textAlign:'center'
    },
    table: {
        minWidth: 650,
      },
  }));