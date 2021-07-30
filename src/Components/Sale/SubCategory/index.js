import React from 'react';
import Grid from "@material-ui/core/Grid";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Link from "@material-ui/core/Link";
import { useStyles } from "./style";




export default function SubCategory({ row }) {
  const classes = useStyles();

  // console.log(row);
  
  return (
    <>

{/* <Link href="#" style={{ textDecoration: "none", color: "black" }} > */}
<Link   style={{ textDecoration: "none", color: "black", cursor: "pointer" }} >
      
      <Grid container spacinig={0}>
        
        <Grid item xs={12} sm={10}>
          <Typography className={classes.heading}>
          { row.name}
            
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1}>
          <AccordionSummary 
            expandIcon={<ArrowForwardIosIcon  />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
        </Grid>
      </Grid>
  
    </Link>      
   
     
    </>
  );
}
