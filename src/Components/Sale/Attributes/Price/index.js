import React from "react";
import { Form } from "react-bootstrap";

export default function Price({ getData }) {
  return (
    <>
      <h3> SET PRICE</h3>
      <Form>
        <Form.Group className="mb-12">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" onChange={getData} />
        </Form.Group>
      </Form>
    </>
  );
}
