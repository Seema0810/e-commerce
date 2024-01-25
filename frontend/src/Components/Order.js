import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART } from "../redux/actions/types";
import PaypalPayment from "./PaypalPayment";



const Order = () => {

  const createOrder = (data) => {
    console.log("creating order");
    return "abcd";
    // Order is created on the server and the order id is returned
    // return fetch(`${API_BASE_URL}/my-server/create-paypal-order`, {
    //   method: "POST",
    //    headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // use the "body" param to optionally pass additional order information
    //   // like product skus and quantities
    //   body: JSON.stringify({
    //     data,
    //   }),
    // })
    // .then((response) => response.json())
    // .then((order) => order.id);
  };
  const onApprove = (data) => {
    console.log("approving order");
     // Order is captured on the server and the response is returned to the browser
    //  return fetch(`${API_BASE_URL}/my-server/capture-paypal-order`, {
    //   method: "POST",
    //    headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     orderID: data.orderID
    //   })
    // })

    // .then((response) => {
    //   console.log("Payment successfull");
    //   return response.json()
    // }).then((data)=>console.log(data));
  };

  const dispatch = useDispatch();
  const [showPayPalButton, setShowPayPalButton] = useState(false);
  const [shippingData, setShippingData] = useState("");
  const [addProducts, setAddProducts] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const initialOptions = {
    clientId: "AeIj4h4SacNfQJ3ZW9c81byVG7V_tq78UpXMahGsxnmFEaylD2akAPjXhzOCJHuG-uLJMDdJBdkezXtS",
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

  //handling the payple button on click of place order button
   
  const handlePaypalClick=()=>{
    setShowPayPalButton(true);
  }

  const orderItems = useSelector((state) => state.cart.cartItems);
  console.log("orderIems on orderPage", orderItems);

  const totalAmount=()=>{
    return orderItems.reduce((total, orderItem)=>{
      return (
        total+ orderItem.reduce((orderTotal, item)=>{
          return orderTotal+ item.quantity*item.productRef.price;
        },0)
      );
    },0)
  }

  // calculating the total amount
   const orderAmount= totalAmount();

   const totalOrderAmount= orderAmount + 18/100*orderAmount


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
            {orderItems.map((orderItem) => (
              <Card className="mt-3" key={orderItem.index}>
                <Card.Body>
                  <h5>
                    <b>Items</b>
                  </h5>
                  {/* Assuming orderItem is an array, use map to iterate over its items */}
                  {orderItem.map((item) => (
                    <div key={item._id}>
                      <img
                        src={item.productRef.image}
                        className="border border-2 p-2 img-fluid"
                        style={{ height: "5.5rem", width: "4.5rem" }}
                        alt="Product Image"
                      />
                      <span className="mx-2">
                        <a href="/">{item.productRef.title.slice(0, 20)}</a>
                      </span>
                      <span style={{ marginLeft: "5rem" }}>
                        {item.quantity}
                      </span>
                      <span style={{ marginLeft: "5rem" }}>
                        ${item.productRef.price}
                      </span>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={4}>          
            <Card className="mt-5">
              <Card.Body>
                <p>
                  <b>Order Summary</b>
                </p>
                <hr />
                <p>
                  <span>Amount</span>
                  <span style={{ marginLeft: "6rem" }}>${orderAmount}</span>
                </p>
                <hr />
                <p>
                  <span>tax</span>
                  <span style={{ marginLeft: "7rem" }}>${(18/100*orderAmount).toFixed(2)}</span>
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
                    <b>${totalOrderAmount}</b>
                  </span>
                </p>
              </Card.Body>
              <button
                type="button"
                className="btn p-0 w-50 mb-2 btn-primary border-secondary mx-auto"
                onClick= {handlePaypalClick}
              >
               Place Order
              </button>
              {showPayPalButton && <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
               orderItems={orderItems}
                createOrder={createOrder}
                onApprove={onApprove}
            />
                {/* <PaypalPayment orderItems={orderItems}/> */}
              </PayPalScriptProvider>}
              
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
