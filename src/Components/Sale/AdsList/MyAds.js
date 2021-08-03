import React, { useState } from "react";
import { database } from "../../../firebase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";
import { useStyles } from "./MyAdsStyle";

export default function MyAds({ ads, noEdit }) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={1} className={classes.addDate} sm={1}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.fromDate}
            >
              From: July 31, 21
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              To Aug 30, 21
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.adTitleHeding}
            >
              {ads.adTitle}
            </Typography>

            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.adViewFavourite}
            >
              <VisibilityIcon />
              View | <FavoriteIcon /> Likes
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.adTitleHeding}
            >
              Rs, {ads.price}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnActive}
            >
              Active
            </Button>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.adTitleHeding}
            >
              This Ad is currently live.
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            {noEdit && (
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <MoreHorizIcon />
              </IconButton>
            )}
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={() => setAnchorEl(null)}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch"
                }
              }}
            >
              <MenuItem
                key={ads.id}
                onClick={() => history.push(`/edit/${ads.id}`)}
              >
                Edit
              </MenuItem>
            </Menu>
            {/* <Menu
                id="simple-menu"
                // anchorEl={anchorEl}
                keepMounted
                // open={Boolean(anchorEl)}
                onClose={false}
              >
                <MenuItem onClick={() => true}>Profile</MenuItem>
                <MenuItem onClick={() => true}>My account</MenuItem>
                <MenuItem onClick={() => true}>Logout</MenuItem>
              </Menu> */}
            <br />
            <Button variant="outlined" color="primary">
              Sell Faster Now
            </Button>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />

      {/* {!noEdit && <h1> Frequent Recommendations </h1>} */}
      {/* <div style={{ border: "1px solid black" }}> */}
      {/* <div>{ads.adTitle}</div>
          <div>{ads.description}</div>
          <div>{ads.price}</div>
          <div>{ads.uName}</div>
          <div>{ads.phNumber}</div>
          <div>{ads.state}</div>
          <div>{ads.city}</div>
          <div>{ads.neighbour}</div> */}
      {/* {noEdit && (
            <div>
              <Button onClick={() => history.push(`/edit/${ads.id}`)}>
                Edit
              </Button>
            </div>
          )} */}
      {/* {ads.createdAt} */}
      {/* </div> */}
    </>
  );
}
