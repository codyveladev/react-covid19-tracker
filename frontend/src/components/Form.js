import React, { useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Context } from '../Store'
const counties = require("../counties.json");

const axios = require("axios");

let dayOptions = [30, 45, 60, 100, 200];
export default function FormField() {
  //Form State
  const [county, setCounty] = useState("anderson");
  const [days, setDays] = useState("30");
  const [loading, setLoading] = useState(false);
  
  //Context
  const [state, setState] = useContext(Context);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const startTime = performance.now();

    axios
      .get(`http://localhost:8080/county/${county}?days=${days}`)
      .then((response) => {
        setState(response.data)

        const duration = performance.now() - startTime;
        console.log(`someMethodIThinkMightBeSlow took ${duration}ms`);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="4" controlId="formGridState">
            <Form.Label>County</Form.Label>
            <Form.Control
              as="select"
              defaultValue="angelina"
              name="county"
              value={county}
              onChange={(e) => {
                const selectedCounty = e.target.value;
                setCounty(selectedCounty);
              }}
            >
              {counties.map((index) => {
                return (
                  <option
                    key={
                      Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15)
                    }
                  >
                    {index}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formGridState">
            <Form.Label>Select Number of Days</Form.Label>
            <Form.Control
              as="select"
              defaultValue="30"
              name="days"
              value={days}
              onChange={(e) => {
                const selectedDays = e.target.value;
                setDays(selectedDays);
              }}
            >
              {dayOptions.map((index) => {
                return (
                  <option
                    key={
                      Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15)
                    }
                  >
                    {index}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Button
            className="mt-4 my-3 ml-2 px-5"
            size="sm"
            variant="success"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
            )}
            {loading && <span>Fetching Data...</span>}
            {!loading && <span>Submit</span>}
          </Button>
        </Row>
      </Form>
    </>
  );
}
