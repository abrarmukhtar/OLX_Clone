import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function UDetail({ getData, initData }) {
  return (
    <>
      <h3> REVIEW YOUR DETAILS</h3>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="uName"
            onChange={getData}
            value={initData.uName}
          />
        </Form.Group>
        <br />
        <Form.Group className="mb-2">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phNumber"
            onChange={getData}
            value={initData.phNumber}
          />
        </Form.Group>
      </Form>
    </>
  );
}
