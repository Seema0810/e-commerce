import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../config";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { UPDATE_CART } from "../redux/actions/types";

const Cart = () => {
  const dispatch= useDispatch();
  // let [quantity, setQuantity] = useState([]);
  const [addProducts, setAddProducts] = useState([]);
  const token = localStorage.getItem("token");
  console.log("token is ", token);
  // console.log("product quantity is ", addProducts);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
   
  // const productToAdd=useSelector(state=>state.cartItems); 
  // console.log("product to add in cart", productToAdd);


  const getProductDetail = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/cart`, { headers });
    console.log("cart response of product", res.data);
    if (res.status === 200) {
      // setAddProducts(res.data.cart.products);
      // localStorage.setItem("cart", res.data.cart.products);
      dispatch({ type: UPDATE_CART, payload: res.data.cart.products });
      setAddProducts(res.data.cart.products);
 
      console.log("cart product details is", res.data.cart.products);
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  // useEffect(()=> {
  //   getUpdatedCart();
  // },[])
  // Increase the item
  const handleIncrease = async(productId) => {
    let updatedProduct;
    const finalCart = addProducts.map((product) => {
      if (product.productRef._id == productId) {
        product.quantity = product.quantity + 1;
        updatedProduct={productId, quantity:product.quantity}
      }
      return product;
    });
    if(updatedProduct){
     const isCartUpdated= await updateCart(updatedProduct);
     if(isCartUpdated)
      {
        setAddProducts(finalCart);
      }
    }
  
    
  };
  const updateCart = async ({productId, quantity}) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/api/cart/${productId}`,JSON.stringify({quantity}), {
        headers,
      });
      if (res.status === 200) {    
        return true;
      }
      return false;
     
    } catch (error) {
     
      console.log("updated cart error is ", error);
      return false;
    }
  };
  // getting the updated cart
  // const getUpdatedCart = async () => {
  //   try {
  //     const res = await axios.get(`${API_BASE_URL}/api/cart`, { headers });
  //     if (res.status === 200) {
  //       console.log("updated cart is", res.data);
  //       // setAddProducts(res.data)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //Decrease the item
  const handleDecrease = async (productId) => {
    let updatedProduct;
    const finalCart = addProducts.map((product) => {
      if (product.productRef._id == productId) {
        product.quantity = product.quantity - 1;
        updatedProduct={productId, quantity:product.quantity}
      }
      return product;
    });
    if(updatedProduct){
     const isCartUpdated= await updateCart(updatedProduct);
     if(isCartUpdated)
      {
        setAddProducts(finalCart);
      }
    }
  };
  //delete the item from the cart
  const handleDelete = async (productId) => {
    try {
      console.log("delete button is clicked");
      const res = await axios.delete(`${API_BASE_URL}/api/cart/${productId}`, {
        headers,
      });
      getProductDetail();
      console.log("Network response:", res);
      if (res.status === 200){
        console.log("deleted respose is", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // getting the total no. of items
  const getTotalItems = () => {
    return addProducts.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  };
  //getting the total amount of all product
  const getTotalAmount = () => {
    return addProducts
      .reduce((total, product) => {
        return total + product.productRef.price * product.quantity;
      }, 0)
      .toFixed(2);
  };
  return (
    <>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={8}>
            <h2 className="mt-2">Shopping Cart</h2>
            {addProducts.map((product) => {
              return (
                <Card key={product.productRef._id}>
                  <Card.Body>
                    <Row>
                      <Col md={3} className="d-inline-flex">
                        <img
                          src={product.productRef.image}
                          className="border border-2 p-2 img-fluid "
                          style={{ height: "5.5rem", width: "4.5rem" }}
                        />
                        <a
                          href="/"
                          style={{ fontSize: "13px" }}
                          className="mt-4 mx-1"
                        >
                          <b>{product.productRef.title.slice(0, 20)}</b>
                        </a>
                      </Col>
                      <Col md={3} className="d-inline-flex">
                        <button
                          onClick={() => handleIncrease(product.productRef._id)}
                          className="border-0 "
                        >
                          <i className="fa-solid fa-circle-plus m-3 fs-3"></i>
                        </button>
                        <span className="m-2 fs-3">{product.quantity}</span>
                        <button
                         onClick={() => handleDecrease(product.productRef._id)}
                          className="border-0"
                        >
                          <i className="fa-solid fa-circle-minus m-3 fs-3"></i>
                        </button>
                      </Col>
                      <Col md={1} className="d-inline-flex">
                        <span className="m-2 fs-3">
                          $
                          {(
                            product.productRef.price * product.quantity
                          ).toFixed(2)}
                        </span>
                      </Col>
                      <Col md={1} className="mx-5 mt-3">
                        <button
                          className="border-0"
                          onClick={() => handleDelete(product.productRef._id)}
                        >
                          <i className="fa-solid fa-trash fs-3"></i>
                        </button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
          <Col md={4}>
            <Card className="mt-5">
              <Card.Body>
                <p className="text-center">
                  Subtotal({getTotalItems()}items):${getTotalAmount()}
                </p>
                <hr />
                <Link to="/shipping" ><button
                  type="button"
                  className="btn p-0 w-50 btn-warning border-primary"
                >
                  Proceed to Checkout
                </button></Link>
              </Card.Body>
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

export default Cart;
