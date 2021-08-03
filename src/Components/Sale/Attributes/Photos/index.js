import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';


export default function UploadButtons() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.parentContainer}>
      <Typography variant="h6" className={classes.PhotosHeading}>
        UPLOAD UP TO 10 PHOTOS
      </Typography>
      <Container className={classes.root} maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={2} sm={1}>
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Hidden xsUp>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={1} >
            <Paper className={classes.paper} variant="outlined">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          </Hidden>
        </Grid>
     
      </Container>
    </Container>
  );
}
