import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";

import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function UploadImage() {
  const classes = useStyles();

  return (
    <Grid item xs={2} sm={1}>
      <Paper className={classes.paper} variant="outlined">
        <label type="file" htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddAPhotoIcon>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
            </AddAPhotoIcon>
          </IconButton>
        </label>
      </Paper>
    </Grid>
  );
}
