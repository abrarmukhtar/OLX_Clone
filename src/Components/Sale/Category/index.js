import React from "react";
import Grid from "@material-ui/core/Grid";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Link from "@material-ui/core/Link";
import { useStyles } from "./style";

export default function Category({ category, getCategory }) {
  // export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <>
      <Link
        onClick={() => getCategory(category)}
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        <Grid container spacinig={0}>
          <Grid item xs={12} sm={1}>
            {/* <PhoneAndroidIcon /> */}

            <img
              src={category.icon}
              alt=" "
              style={{ width: "40px", height: "40px" }}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography className={classes.heading}>{category.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <AccordionSummary
              expandIcon={<ArrowForwardIosIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            ></AccordionSummary>
          </Grid>
        </Grid>
      </Link>
    </>
  );
}
