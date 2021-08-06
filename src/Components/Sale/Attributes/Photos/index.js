import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";

export default function Photos() {
  const classes = useStyles();

  return (
    <div htmlFor="click">
      <Container maxWidth="xl" className={classes.parentContainer}>
        <Typography variant="h6" className={classes.PhotosHeading}>
          UPLOAD UP TO 10 PHOTOS
        </Typography>
      </Container>
      <Container className={classes.root} maxWidth="xl">
        <Grid item xs={2} sm={1}>
          <Paper
            className={classes.paper}
            variant="outlined"
            style={{ border: "1px solid black" }}
          >
            <label>
              click mi
              <input type="file" id="click" className={classes.input} />
              <AddAPhotoIcon htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  {/* <input
                  accept="image/*"
                  // className={classes.input}
                  id="icon-button-file"
                  type="file"
                /> */}
                  {/* <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                /> */}
                </IconButton>
              </AddAPhotoIcon>
            </label>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
