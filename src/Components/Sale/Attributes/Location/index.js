import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Location() {
  const initState = { state: "", city: "", neighbour: "" };

  const [detail, setDetail] = useState(initState);

  const handleDetail = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setDetail({
      ...detail,
      [name]: value
    });
  };

  console.log(detail);
  return (
    <>
      <h3> CONFIRM YOUR LOCATION</h3>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" name="state" onChange={handleDetail}>
          <option value=""></option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>City</Form.Label>
        <Form.Control as="select" name="city" onChange={handleDetail}>
          <option value=""></option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Lahore">Lahore</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>Neighbourhood</Form.Label>
        <Form.Control as="select" name="neighbour" onChange={handleDetail}>
          <option value=""></option>
          <option value="abc">abc</option>
          <option value="xyz">xyz</option>
        </Form.Control>
      </Form.Group>
    </>
  );
}
