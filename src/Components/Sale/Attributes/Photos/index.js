import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";
import Images from "./Images";
import { storage, database } from "../../../../firebase";
import { v4 as uuidV4 } from "uuid";

export default function Photos() {
  const classes = useStyles();

  // useEffect(() => {
  //   window.addEventListener("beforeunload", deleteImages);
  //   return () => {
  //     window.removeEventListener("beforeunload", deleteImages);
  //   };
  // }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  });

  const handleTabClosing = () => {
    // removePlayerFromGame();
    // alert("clicl");
    deleteImages();
  };

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
    deleteImages();
  };

  // this code to delte images from storage
  const deleteImages = () => {
    storage
      .ref(`images/`)
      .listAll()
      .then((listResults) => {
        const promises = listResults.items.map((item) => {
          return item.delete();
        });
        Promise.all(promises);
        setUrls([]);
      });
  };
  const [uploadingFiles, setUploadingFiles] = useState([]);

  const [urls, setUrls] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file == null) return;

    const id = uuidV4();
    setUploadingFiles((prevUploadingFiles) => [
      ...prevUploadingFiles,
      { id: id, name: file.name, progress: 0, error: false }
    ]);

    const filePath = `/images/${file.name}`;

    const uploadTask = storage.ref(`${filePath}`).put(file);
    // console.log(uploadTask);
    uploadTask.on(
      "state_changed",

      //progress code
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        // console.log(progress);
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress };
            }
            return uploadFile;
          });
        });
      },
      // error code
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true };
            }
            return uploadFile;
          });
        });
      },

      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setUrls([...urls, url]);
        });
      }
    );
  };

  // const imagesData = [
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   ""
  // ];

  // console.log(uploadingFiles);
  console.log(urls);
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
            accept="image/*"
          />

          {<Images imgSrc={urls} />}
          {/* {imagesData.length > 0
            ? imagesData.map((arr, index) => {
                if (index === 10) {
                  <br />;
                }
                return <Images key={index} imgSrc={arr} />;
              })
            : ""} */}
          {/* {uploadingFiles.map((arr, index) => {
            return <Images key={index} imgSrc={arr} />;
          })} */}
        </Container>
      </label>
      <button onClick={deleteImages}>click me </button>
    </div>
  );
}
