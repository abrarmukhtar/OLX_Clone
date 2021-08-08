import React from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";
// import { Toast, ProgressBar } from "react-bootstrap";
export default function Photos({ imgSrc }) {
  const classes = useStyles();

  // console.log(imgSrc);s
  return (
    <>
      {imgSrc === "" ? (
        <AddAPhotoIcon className={classes.img} />
      ) : (
        <img src={imgSrc} alt="no data" className={classes.img} />
      )}
    </>
  );
}
