import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react'
import { API_BASE_URL } from '../config';

const PaypalPayment = ({orderItems}) => {
  // Construct the cart array dynamically based on the actual items in the user's cart
const cart = orderItems.map(item => ({
  sku: 1550,
  quantity: 2, // Assuming quantity should be a string
}));


    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch(`${API_BASE_URL}/my-server/create-paypal-order`, {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          body: JSON.stringify({
            cart,
          }),
        })
        .then((response) => response.json())
        .then((order) => order.id);
      };
      const onApprove = (data) => {
         // Order is captured on the server and the response is returned to the browser
         return fetch(`${API_BASE_URL}/my-server/capture-paypal-order`, {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID
          })
        })

        .then((response) => {
          console.log("Payment successfull");
          return response.json()
        }).then((data)=>console.log(data));
      };
  return (
    <>
      <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    </>
  )
}

export default PaypalPayment