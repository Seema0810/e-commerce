import React from "react";
import { Container, Row, Card,Form, Button } from "react-bootstrap";

const Review = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <h3 className="mx-5">Reviews</h3>
          <Card style={{ width: "60rem" }} className="mx-5">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Basir</Card.Subtitle>
              <Card.Text>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <p>2023-12-29</p>
                <h5>Good Shirt</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <h4  className="mx-5">Write a customer review</h4>
        <h6  className="mx-5">Rating</h6>
        <Row>
        <Form.Select  className="mx-5" style={{ width: "60rem" }}>
        <option>Select any one</option>
        <option>1-fine</option>
        <option>2-Good</option>
        <option>3-better</option>
        <option>4-best</option>
        <option>5-excellent</option>
      </Form.Select>
      <div class="input-group mt-5 mx-5" style={{ width: "60rem" }}>
  
  <textarea class="form-control" aria-label="With textarea" placeholder="comment here..."></textarea>
</div>

<Button variant="warning" className="mt-4 mx-5 "  style={{ width: "10rem" }}>Submit</Button>{' '}
        </Row>
      </Container>
    </>
  );
};

export default Review;
