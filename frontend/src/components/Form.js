import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
const countries = require('../countries.json')

let dayOptions = [30, 45, 60, 100, 200]
export default function FormField () {
    return (
      <Form>
        <Row>
          <Form.Group as={Col} md="4" controlId="formGridState">
            <Form.Label>County</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {countries.map((index) => {
                return <option>{index}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formGridState">
            <Form.Label>Select Number of Days</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {dayOptions.map((index) => {
                return <option>{index}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Button
            className="mt-4 my-3 ml-2 px-5"
            size="sm"
            variant="info"
            type="submit"
          >
            Submit
          </Button>
        </Row>
      </Form>
    );
}
