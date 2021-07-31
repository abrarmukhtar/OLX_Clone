import React from "react";
import Detail from "./Detail";
import Price from "./Price";
import Photos from "./Photos";
import Location from "./Location";
import UserDetail from "./UDetail";
import { useAuth } from "../../../contexts/AuthContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sales from "../Sales";

export default function Attributes() {
  const { currentUser } = useAuth();

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
            <Detail />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Price />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <Location />
          </Row>
          <Row
            style={{
              padding: "10px 10px 10px 10px",
              border: "1px solid black"
            }}
          >
            <UserDetail />
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
