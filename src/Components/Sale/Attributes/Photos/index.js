import React, { useState } from "react";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";
import Images from "./Images";

export default function Photos() {
  const classes = useStyles();

  const maxData = 18;

  const imagesData = [
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300"

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
    ""
  ];
  return (
    <div htmlFor="click" style={{ border: "1px solid black" }}>
      <Container maxWidth="xl" className={classes.parentContainer}>
        <Typography variant="h6" className={classes.PhotosHeading}>
          UPLOAD UP TO 10 PHOTOS
        </Typography>
      </Container>
      <label
        style={{ width: "100%", height: "250px", border: "1px solid black" }}
      >
        <Container className={classes.root} maxWidth="xl">
          <input type="file" id="click" className={classes.input} />

          {imagesData.length > 0
            ? imagesData.map((arr, index) => {
                if (index === 10) {
                  return (
                    <>
                      <br />
                      <Images key={index} imgSrc={arr} />;
                    </>
                  );
                } else {
                  return <Images key={index} imgSrc={arr} />;
                }
              })
            : ""}
        </Container>
      </label>
    </div>
  );
}
