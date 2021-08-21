import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import Price from "./Price";
import Photos from "./Photos";
import Location from "./Location";
import UserDetail from "./UDetail";
import { useAuth } from "../../../contexts/AuthContext";
import { database } from "../../../firebase";

import { useParams, useHistory } from "react-router";

import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function Attributes({ Category, SubCategory }) {
  const { currentUser } = useAuth();
  const history = useHistory();
  const { postId } = useParams();

  //this is for Details
  const initCombined = {
    adTitle: "",
    description: "",
    price: "",
    uName: "",
    phNumber: "",
    state: "",
    city: "",
    neighbour: "",
    userId: "",
    
    createdAt: ""
  };

  const [combineDetail, setCombineDetail] = useState(initCombined);

  const handleCombined = (e) => {
    // console.log(e.target.name);

    const { name, value } = e.target;
    setCombineDetail({
      ...combineDetail,
      [name]: value,
      userId: currentUser ? currentUser.uid : "",
      createdAt: database.getCurrentTimestamp()
    });
  };

  useEffect(() => {
    if (!currentUser) return;

    if (!postId) return;

    const subc = database.collectGp.where("userId", "==", currentUser.uid);
    subc.onSnapshot((querySnapshot) => {
      setCombineDetail(
        querySnapshot.docs
          .filter((doc) => doc.id === postId)
          .map(database.formatDocWOId)[0]
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postId) {
      const upd = database.collectGp.where("userId", "==", currentUser.uid);

      upd.get().then((snapshot) => {
        snapshot.docs.map((snap) => {
          if (database.formatDoc(snap).id === postId) {
            snap.ref.update(combineDetail);
          }
        });
      });

      setCombineDetail(initCombined);
      history.push("/myads");
    } else {
      database.category
        .doc(Category.id)
        .collection("PostSubTypes")
        .doc(SubCategory.id)
        .collection("ads")
        .add(combineDetail);

      setCombineDetail(initCombined);
    }
  };

  return (
    <>
      <Container
        style={{
          padding: "50px 10px 50px 30px",
          margin: "50px 50px 50px 50px",
          alignContent: "center"
        }}
      >
        <Col xs={12}>
          <h3> {SubCategory && SubCategory.name}</h3>
          <br />
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Detail getData={handleCombined} initData={combineDetail} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Price getData={handleCombined} initData={combineDetail} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Location getData={handleCombined} initData={combineDetail} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Photos getData={handleCombined} initData={combineDetail}/>
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <UserDetail getData={handleCombined} initData={combineDetail} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Button onClick={handleSubmit}>
              {postId ? "Continue" : "Post New"}
            </Button>
          </Row>
        </Col>
      </Container>
    </>
  );
}
