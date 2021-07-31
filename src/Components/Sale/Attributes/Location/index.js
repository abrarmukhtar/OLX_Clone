import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Location({ getData, initData }) {
  return (
    <>
      <h3> CONFIRM YOUR LOCATION</h3>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>State</Form.Label>
        <Form.Control
          as="select"
          name="state"
          onChange={getData}
          value={initData.state}
        >
          <option value=""></option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>City</Form.Label>
        <Form.Control
          as="select"
          name="city"
          onChange={getData}
          value={initData.city}
        >
          <option value=""></option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Lahore">Lahore</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>Neighbourhood</Form.Label>
        <Form.Control
          as="select"
          name="neighbour"
          onChange={getData}
          value={initData.neighbour}
        >
          <option value=""></option>
          <option value="abc">abc</option>
          <option value="xyz">xyz</option>
        </Form.Control>
      </Form.Group>
    </>
  );
}
