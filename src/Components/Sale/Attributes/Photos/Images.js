import React, { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "./style";
import { Toast, ProgressBar } from "react-bootstrap";
export default function Photos({ imgSrc }) {
  const classes = useStyles();

  // const [images, setImages] = useState([

  // ]);
  // console.log(imgSrc);
  return (
    <>
      {/* <Toast key={file.id}>
        <Toast.Header
          className="text-truncate w-100 d-block"
          closeButton={file.error}
        >
          {file.name}
        </Toast.Header>
        <Toast.Body>
          <ProgressBar
            animated={!file.error}
            variant={file.error ? "danger" : "primary"}
            now={file.error ? 100 : file.progress * 100}
            label={file.error ? "Error" : `${Math.round(file.progress * 100)}%`}
          />
        </Toast.Body>
      </Toast> */}
      {imgSrc[0] ? (
        <img src={imgSrc[0]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}

      {imgSrc[1] ? (
        <img src={imgSrc[1]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[2] ? (
        <img src={imgSrc[2]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[3] ? (
        <img src={imgSrc[3]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[4] ? (
        <img src={imgSrc[4]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[5] ? (
        <img src={imgSrc[5]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[6] ? (
        <img src={imgSrc[6]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[7] ? (
        <img src={imgSrc[7]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[8] ? (
        <img src={imgSrc[8]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[9] ? (
        <img src={imgSrc[9]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[10] ? (
        <img src={imgSrc[10]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[11] ? (
        <img src={imgSrc[11]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[12] ? (
        <img src={imgSrc[12]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[13] ? (
        <img src={imgSrc[13]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[14] ? (
        <img src={imgSrc[14]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[15] ? (
        <img src={imgSrc[15]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[16] ? (
        <img src={imgSrc[16]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[17] ? (
        <img src={imgSrc[17]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[18] ? (
        <img src={imgSrc[18]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
      {imgSrc[19] ? (
        <img src={imgSrc[19]} alt="no data" className={classes.img} />
      ) : (
        <AddAPhotoIcon className={classes.img} />
      )}
    </>
  );
}
