import React from "react";
import { Toast, Button } from "react-bootstrap";
import { useStyles } from "./style";

export default function Photos({ imgSrc }) {
  const classes = useStyles();

  
  return (
    <>
      <Toast style={{ width: "130px", height: "150px" }}>
        <Toast.Body >
          <div>
            <Button> X </Button>
            <img src={imgSrc} alt="no data"  className={classes.img} />
          </div>
        </Toast.Body>
      </Toast>
    </>
  );
}
