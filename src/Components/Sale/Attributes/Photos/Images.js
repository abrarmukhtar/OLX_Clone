import React from "react";
import { Toast, Button } from "react-bootstrap";
import { useStyles } from "./style";

export default function Photos({ imgSrc, forDelete }) {
  const classes = useStyles();

  
  
  return (
    <>
      <Toast style={{ width: "110px", height: "130px" }}>
        <Toast.Body >
          <div>
             <Button type="submit" onClick={()=> forDelete(imgSrc.id)} style={{transform:"translateX(50px)"}}> X </Button>
            <img src={imgSrc.thumb} alt="no data"  className={classes.img} />
          </div>
        </Toast.Body>
      </Toast>
    </>
  );
}
