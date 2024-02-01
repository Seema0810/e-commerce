import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { API_BASE_URL } from '../config';
import axios from "axios";


const Adminorder = () => {
    const [orders, setOrders]= useState([]);

    const token = localStorage.getItem("token");
    console.log("token is ", token);
    // console.log("product quantity is ", addProducts);
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
// calling the get request to show the order history of the customer
    const getOrderHistory = async () => {
        const res = await axios.get(`${API_BASE_URL}/api/order`, { headers });
        console.log("order history of customer is", res.data);
        if (res.status === 200) {
         
          setOrders(res.data);
     
          console.log("order details is", res.data);
        }
      };
      useEffect(() => {
        getOrderHistory();
      }, []);

  return (
    <> 
    <h1 className='text-center' style={{marginTop:"5rem"}}>Adminorder</h1>
        <Table responsive striped bordered hover className='w-75 mx-auto' variant="dark" >
      <thead >
        <tr>
          <th className='text-center'>#Order Id</th> 
          <th className='text-center'>customerId: </th>
          <th className='text-center'>Placed at</th>
          {/* <th className='text-center'>Order Image</th> */}
          <th className='text-center'>Order Price</th>

        </tr>
      </thead>
      <tbody>
        {orders.map((order)=>{
            return(
                <tr key={order._id}>
                <td className='text-center'>#{order._id}</td>
                <td className='text-center'>{order.customerId}</td>
                <td className='text-center'>24 feb 2014</td>
                {/* <td className='text-center'>womens.jpg</td> */}
                <td className='text-center'>${order.amount}</td>         
              </tr> 
            )
        })}
             
      </tbody>
    </Table>
 
    </>
  )
}

export default Adminorder

