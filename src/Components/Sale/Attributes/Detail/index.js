import React from 'react'
import {Form} from 'react-bootstrap'


export default function Detail() {
    
    
    
    return (
        <>

        <h3> INCLUDE SOME DETAILS</h3>
        <Form >
        <Form.Group className="mb-2" >
          <Form.Label>Ad title</Form.Label>
          <Form.Control type="text"   name="adTitle"/>
          Mention the key features of your item (e.g. brand, model, age, type)
        </Form.Group>
        <br />
        <Form.Group className="mb-2" >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" />
        </Form.Group>
      </Form>
      </>
    )
}
