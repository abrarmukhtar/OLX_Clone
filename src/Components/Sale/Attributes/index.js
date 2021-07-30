import React from "react";
import Detail from "./Detail";
import Price from "./Price";
import Photos from "./Photos";
import Location from './Location'
import UserDetail from "./UDetail";
import { useAuth } from "../../../contexts/AuthContext";
import {Container, Row, Col} from 'react-bootstrap'

export default function Attributes() {
  const { currentUser } = useAuth();

  return (
    <>
    <Container>
      <Row>
      
      <Col xs={10}> 
      <Detail />
      <Price />
      <Location />
       </Col>
      {/* <Photos /> */}
    {/* <UserDetail /> */}
    </Row>
    </Container>
    </>
  );
}
