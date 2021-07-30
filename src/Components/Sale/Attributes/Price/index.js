import React from "react";
import { Form } from "react-bootstrap";

export default function Price() {
  return (
    <>
      <h3> SET PRICE</h3>
      <Form>
        <Form.Group className="mb-12">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" />
        </Form.Group>
      </Form>
    </>
  );
}
