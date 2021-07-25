import { makeStyles } from "@material-ui/core/styles";

export const UseStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    hedings:{
        textAlign:'center'
    },
    table: {
        minWidth: 650,
      },
      tblRow:{
        // backgroundColor:'red',
        textAlign:'center',
        borderBottom: '2px solid black',
        // borderBottom:"1px solid black",
        // borderTop:"1px solid green"

      },
      tblHeading:{
        border:'2px solid black'
      },
      tblContainer:{
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
      }
   
  }));