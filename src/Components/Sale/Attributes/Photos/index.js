import React, { useState } from "react";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";
import Images from "./Images";
import { v4 as uuidV4 } from "uuid";

export default function Photos() {
  const classes = useStyles();

  const [uploadingFiles, setUploadingFiles] = useState([]);

  const handleUpload = (e) => {};

  const imagesData = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div>
      <Container maxWidth="xl" className={classes.parentContainer}>
        <Typography variant="h6" className={classes.PhotosHeading}>
          UPLOAD UP TO 10 PHOTOS
        </Typography>
      </Container>
      <label style={{ width: "90%", height: "250px" }} htmlFor="click">
        <Container className={classes.root} maxWidth="xl">
          <input
            type="file"
            id="click"
            className={classes.input}
            onChange={handleUpload}
            multiple="multiple"
          />

          {imagesData.length > 0
            ? imagesData.map((arr, index) => {
                if (index === 10) {
                  <br />;
                }
                return <Images key={index} imgSrc={arr} />;
              })
            : ""}
        </Container>
      </label>
    </div>
  );
}
