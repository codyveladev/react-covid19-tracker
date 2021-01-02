import React, { useContext } from "react";
import { Context } from "../Store";
import { Card, Col, Row } from "react-bootstrap";

export default function StatDisplay() {
  const [state] = useContext(Context);
  const getPercentIncrease = (arr) => {
    let percentIncrease =
      ((arr[arr.length - 1] - arr[0]) / Math.abs(arr[0])) * 100;

    return percentIncrease.toFixed(2);
  };

  return (
    <>
      <Row className="mt-3">
        <Col md="4">
          <Card className="border border-secondary">
            <Card.Header className="border-bottom border-secondary">
              <Card.Title className="text-center">
                <h3>
                  Percent Increase from {state.dates[0]} to{" "}
                  {state.dates[state.dates.length - 1]}
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center display-4 text-danger">
                <p>{getPercentIncrease(state.numbers)}%</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="border border-secondary">
            <Card.Header className="border-bottom border-secondary">
              <Card.Title className="text-center text-info">
                <h3>Total Tests in Texas</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center display-4 py-3">
                <p>{state.tests}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="border border-secondary">
            <Card.Header className="border-bottom border-secondary">
              <Card.Title className="text-center text-danger">
                <h3>Total Deaths in Texas</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center display-4 py-3">
                <p>{state.deathToll}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
