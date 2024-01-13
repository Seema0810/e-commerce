import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART } from "../redux/actions/types";

const Order = () => {
  const dispatch = useDispatch();
  const [shippingData, setShippingData] = useState("");
  const [addProducts, setAddProducts] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };

  const getShippingDetails = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    try {
      const res = await axios.get(`${API_BASE_URL}/shipping`, { headers });
      console.log("shipping response is", res);
      if (res.status === 200) {
        setShippingData(res.data);
        console.log("shipping details are", shippingData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getShippingDetails();
  }, []);

  const orderItems = useSelector((state) => state.cart.cartItems);
  console.log("orderIems on orderPage", orderItems);
  return (
    <>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={8}>
            <h2 className="mt-5">Preview Order</h2>
            <Card className="mt-3">
              <Card.Body>
                <h5>
                  <b>Shipping</b>
                </h5>
                <p style={{ lineHeight: "0.8" }}>
                  <b>Name:</b>
                  {shippingData.name}
                </p>
                <p style={{ lineHeight: "0.8" }}>
                  <b>Address:</b>
                  {shippingData.address}
                </p>
                <a href="/">Edit</a>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <h5>
                  <b>Payment</b>
                </h5>
                <p style={{ lineHeight: "0.8" }}>
                  <b>Method:</b>Paypal
                </p>
                <a href="/">Edit</a>
              </Card.Body>
            </Card>
            {orderItems[0].map((orderItem) => {
              return (
                <Card className="mt-3">
                  <Card.Body>
                    <h5>
                      <b>Items</b>
                    </h5>
                    <img
                      src={orderItems.productRef.image}
                      className="border border-2 p-2 img-fluid "
                      style={{ height: "5.5rem", width: "4.5rem" }}
                    />
                    <span className="mx-2">
                      <a href="/">{orderItems.productRef.title}</a>
                    </span>
                    <span style={{ marginLeft: "5rem" }}>
                      {orderItems.Quantity}
                    </span>
                    <span style={{ marginLeft: "5rem" }}>
                      ${orderItems.productRef.price}
                    </span>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
          <Col md={4}>
            <Card className="mt-5">
              <Card.Body>
                <p>
                  <b>Order Summary</b>
                </p>
                <hr />
                <p>
                  <span>items</span>
                  <span style={{ marginLeft: "6rem" }}>$120</span>
                </p>
                <hr />
                <p>
                  <span>tax</span>
                  <span style={{ marginLeft: "7rem" }}>$18</span>
                </p>
                <hr />
                <p>
                  <span>Shipping</span>
                  <span style={{ marginLeft: "5rem" }}>0</span>
                </p>
                <hr />
                <p>
                  <span>
                    <b>Order Total:</b>
                  </span>
                  <span style={{ marginLeft: "4rem" }}>
                    <b>$128</b>
                  </span>
                </p>
              </Card.Body>
              <button
                type="button"
                className="btn p-0 w-50 mb-2 btn-primary border-secondary mx-auto"
              >
                Proceed to Checkout
              </button>
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons />
              </PayPalScriptProvider>
            </Card>
          </Col>
        </Row>
        <p className="text-center m-5 text-secondary">
          <b>All rights reserved</b>
        </p>
      </Container>
    </>
  );
};

export default Order;
