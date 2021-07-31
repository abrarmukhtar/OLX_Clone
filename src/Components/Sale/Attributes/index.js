import React, { useState } from "react";
import Detail from "./Detail";
import Price from "./Price";
import Photos from "./Photos";
import Location from "./Location";
import UserDetail from "./UDetail";
import { useAuth } from "../../../contexts/AuthContext";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Attributes() {
  const { currentUser } = useAuth();

  //this is for Details
  const initCombined = {
    adTitle: "",
    description: "",
    price: 0,
    uName: "",
    phNumber: 0,
    state: "",
    city: "",
    neighbour: "",
    userId: ""
  };

  const [combineDetail, setCombineDetail] = useState(initCombined);

  const handleCombined = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setCombineDetail({
      ...combineDetail,
      [name]: value,
      userId: currentUser ? currentUser.uid : ""
    });
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
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Detail getData={handleCombined} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Price getData={handleCombined} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Location getData={handleCombined} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <UserDetail getData={handleCombined} />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Button> Post New </Button>
          </Row>
        </Col>
        {/* <Photos /> */}
      </Container>
    </>
  );
}
