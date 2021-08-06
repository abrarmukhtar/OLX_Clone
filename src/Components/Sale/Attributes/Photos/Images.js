import React, { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";

export default function Photos({ imgSrc }) {
  
  const classes = useStyles();

  return (
    <>
      {imgSrc ? (
        <img src={imgSrc} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon  className={classes.img} />
      )}
    </>
  );
}
