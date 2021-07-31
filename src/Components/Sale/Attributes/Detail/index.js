import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Detail() {
  const initState = { addTitle: "", description: "" };

  const [detail, setDetail] = useState(initState);

  const handleChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setDetail( {
      ...detail, [name]:value
    })
    
  

  console.log(detail);

  return (
    <>
      <h3> INCLUDE SOME DETAILS</h3>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>Ad title</Form.Label>
          <Form.Control type="text" name="adTitle" onChange={handleChange} />
          Mention the key features of your item (e.g. brand, model, age, type)
        </Form.Group>
        <br />
        <Form.Group className="mb-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </>
  );
}
