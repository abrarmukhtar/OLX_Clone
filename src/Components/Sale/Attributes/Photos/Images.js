import React from "react";
import { Toast, Button } from "react-bootstrap";
import { useStyles } from "./style";

export default function Photos({ imgSrc, forDelete }) {
  const classes = useStyles();

  return (
    <>
      <Toast
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "110px",
          height: "110px",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Toast.Body>
          <div>
            <Button
              onClick={() => forDelete(imgSrc.id)}
              style={{ position: "absolute", transform: "translateX(55px)" }}
            >

              X
            </Button>
            <img src={imgSrc.thumb} alt="no data" className={classes.img} />
          </div>
        </Toast.Body>
      </Toast>
    </>
  );
}
