import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import UploadImage from "./UploadImage";
export default function Photos() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="xl" className={classes.parentContainer}>
        <Typography variant="h6" className={classes.PhotosHeading}>
          UPLOAD UP TO 10 PHOTOS
        </Typography>
      </Container>
      <Container className={classes.root} maxWidth="xl">
        <Grid container spacing={1} htmlFor="fileUpload">
          <label>
            <UploadImage />
            <input hidden id="fileUpload" type="file" accept="video/*" />
          </label>
        </Grid>
      </Container>
    </div>
  );
}
