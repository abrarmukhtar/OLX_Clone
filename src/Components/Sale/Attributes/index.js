import React from "react";
import Detail from "./Detail";
import Price from "./Price";
import Photos from "./Photos";
import Location from "./Location";
import UserDetail from "./UDetail";
import { useAuth } from "../../../contexts/AuthContext";
import { Container, Row, Col } from "react-bootstrap";

export default function Attributes() {
  const { currentUser } = useAuth();

  return (
    <>
      <Container
        style={{
          // border: "1px solid black",
          padding: "50px 10px 50px 30px",
          margin: "50px 50px 50px 50px",
          alignContent: "center"
        }}
      >
        <Col xs={12}>
          <Row
            style={{
              // margin: "10px 10px 10px 10px",
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Detail />
          </Row>
          <Row
            style={{
              // margin: "10px 10px 10px 10px",
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Price />
          </Row>
          <Row
            style={{
              // margin: "10px 10px 10px 10px",
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Location />
          </Row>
        </Col>
        {/* <Photos /> */}
        {/* <UserDetail /> */}
      </Container>
    </>
  );
}
