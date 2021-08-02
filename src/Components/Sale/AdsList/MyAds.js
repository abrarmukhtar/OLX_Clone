import React from "react";
import { database } from "../../../firebase";
import { Card, Button } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { useHistory } from "react-router-dom";
import { useStyles } from "./MyAdsStyle";

export default function MyAds({ ads, noEdit }) {
  const history = useHistory();

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="xl">
          <Grid container spacing={0}>

            
            <Grid item xs={2} sm={2}>
              <Paper className={classes.paper}>From: July 31, 21</Paper>
              <Paper className={classes.paper}>To Aug 30, 21</Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.paper}>{ads.adTitle}</Paper>
              <Paper className={classes.paper}>View</Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.paper}>Rs, {ads.price}</Paper>
              <Paper className={classes.paper}>Like</Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.paper}>Active</Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.paper}>
                This Ad is currently live.
              </Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.paper}>....</Paper>
              <Paper className={classes.paper}>See Full Ad View</Paper>

            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        {!noEdit && <h1> Frequent Recommendations </h1>}
        <div style={{ border: "1px solid black" }}>
          <div>{ads.adTitle}</div>
          <div>{ads.description}</div>
          <div>{ads.price}</div>
          <div>{ads.uName}</div>
          <div>{ads.phNumber}</div>
          <div>{ads.state}</div>
          <div>{ads.city}</div>
          <div>{ads.neighbour}</div>
          {noEdit && (
            <div>
              {" "}
              <Button onClick={() => history.push(`/edit/${ads.id}`)}>
                Edit
              </Button>
            </div>
          )}
          {/* {ads.createdAt} */}
        </div>
      </div>
    </>
  );
}
