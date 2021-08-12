import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";
import Images from "./Images";
import { storage, database } from "../../../../firebase";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Photos() {
  const classes = useStyles();

  // this code to delte images from storage
  // const deleteImages = () => {
  //   storage
  //     .ref(`images/`)
  //     .listAll()
  //     .then((listResults) => {
  //       const promises = listResults.items.map((item) => {
  //         return item.delete();
  //       });
  //       Promise.all(promises);
  //       setUrls([]);
  //     });
  // };
  const initialData = [
    {
      id: "1",
      name: "cover",
      thumb:
        "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/addPhotoImage.JPG?alt=media&token=3fd708d1-8b27-4bf4-a8ab-302bac3df06b"
    },
    {
      id: "2",
      name: "cover",
      thumb:
        "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/addPhotoImage.JPG?alt=media&token=3fd708d1-8b27-4bf4-a8ab-302bac3df06b"
    },
    { id: "3", name: "cover", thumb: "" },
    { id: "4", name: "cover", thumb: "" }
  ];
  const [uploadingFiles, setUploadingFiles] = useState(initialData);

  const [urls, setUrls] = useState([
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/images%2FVehicle.jpg?alt=media&token=59e6364f-dfcb-47c9-9644-eca40f3c3644",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/images%2Fpp.jpeg?alt=media&token=6b784f72-05be-47b7-b68b-e773d0420366",
  ]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file == null) return;

    const filePath = `/images/${file.name}`;

    const uploadTask = storage.ref(`${filePath}`).put(file);
    // console.log(uploadTask);
    uploadTask.on(
      "state_changed",

      //progress code
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
      },
      // error code
      () => {},

      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setUrls([...urls, url]);
        });
      }
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(uploadingFiles);
    const [reorderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItem);

    setUploadingFiles(items);
  };
  return (
    <div>
      
      <Container maxWidth="xl" className={classes.parentContainer}>
        <Typography variant="h6" className={classes.PhotosHeading}>
          UPLOAD UP TO 10 PHOTOS
        </Typography>
      </Container>
      <label style={{ width: "90%", height: "250px" }} htmlFor="click">
        <Container className={classes.root} maxWidth="xl">
          {/* <input
            type="file"
            id="click"
            className={classes.input}
            onChange={handleUpload}
            multiple="multiple"
            accept="image/*"
          /> */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="characters" direction="horizontal">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ border: "1px solid black", display: "flex" }}
                >
                  {uploadingFiles.map((arr, index) => {
                    // console.log(arr);

                    return (
                      <Draggable
                        key={arr.id}
                        draggableId={arr.id}
                        index={index}
                      >
                        {(provided) => (
                          // <li>
                          <div
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                          >
                            <Images imgSrc={arr.thumb} />
                          </div>
                          // </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      </label>
    </div>
  );
}
