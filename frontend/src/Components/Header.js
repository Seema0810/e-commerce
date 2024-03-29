import React, { useState, useEffect } from "react";
import "../Css/header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCartShopping,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
 
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_BASE_URL } from "../config";
import axios from "axios";
import { UPDATE_CART } from "../redux/actions/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SearchPage from "./SearchPage";

const Header = () => {
  const [searchItem, setSearchItem] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  const [searchedProducts, setSearchedProducts] = useState([]);
  const token= localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const addProducts = useSelector((state) => state.cart.cartItems);
  localStorage.setItem("cart", addProducts);
  console.log("cart icons products are", addProducts);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  

  // getting the total no. of items
  const getTotalItems = () => {
    return addProducts.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  }; 
  // getting the cart details
  const getProductDetail = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/cart`, { headers });
      console.log("cart response of product", res.data);
      if (res.status === 200 && res.data.cart && res.data.cart.products) {
        // Check if res.data.cart and res.data.cart.products are not null/undefined
        dispatch({ type: UPDATE_CART, payload: res.data.cart.products });
        setCartProducts(res.data.cart.products);

        console.log("cart product details is", res.data.cart.products);
      } else {
        toast.error("NO item is in the cart");
        navigate("/cart");
        // Handle the case where the response does not have the expected structure
        console.error("Invalid response structure from the server");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);



  const itemsInCart= getTotalItems();
  const handleCart = () => {
    navigate("/cart");
  };

  //Handling search click to search the item
  const handleSearchClick = async () => {
    console.log("Search button clicked");
    console.log("item is searched is", searchItem);

    const headers = {
      "Content-Type": "application/json",
    };
    // Append the searchItem value as a query parameter to the URL
    try {
      const res = await axios.get(
        `${API_BASE_URL}/search?keyword=${encodeURIComponent(searchItem)}`,
        { headers }
      );
      if (res.status === 200) {
        console.log("Search response is ", res.data);
        navigate("/search", { state: { searchedProducts: res.data } }); // this is how i can pass the state in the navigate function
        setSearchedProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //handling logout functionality here
  const handleLogout =()=>{
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <Container fluid>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row>
          <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Col xs={12} md={2}>
              <Dropdown
                className=" nav-image d-inline-flex "
                // style={{display:"inline-flex",position:"fixed"}}
              >
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  <img
                    src="https://image.freepik.com/free-icon/menu-button-of-three-lines_318-70878.jpg"
                    className="border border-0 mx-2"
                    style={{ height: "30px", width: "25px" }}
                    alt="three"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Kids</Dropdown.Item>
                  <Link to="/women">
                    <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              <Navbar.Brand href="/">Businice</Navbar.Brand>
            </Col>
            <Col md={10} xs={12}>
              <Row>           
            <Col className="pe-5" >
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="position-absolute top-0 end-0 mt-1"/>
              <Navbar.Collapse id="basic-navbar-nav" className="navlink-style">
              <Col xs={12} md={6}>
              <InputGroup >
                <Form.Control
                  placeholder="Search here..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setSearchItem(e.target.value)}
                  value={searchItem}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={handleSearchClick}
                >
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Col>
                <Col  xs={12} md={6}>
                <Nav className="mx-auto toggle-style  ">
                <Nav.Link href="/orderhistory">
                    <button className=" border border-o " onClick={handleCart}>
                     History 
                    </button>
                  </Nav.Link>
                  <Nav.Link href="/cart">
                    <div>
                    <span className="cartTotal">{itemsInCart?itemsInCart:""}</span>
                    <button className=" border border-o " onClick={handleCart}>
                      <i className="fa-solid fa-cart-shopping"></i>                     
                    </button>                   
                    </div>
                  </Nav.Link>

                  <Nav.Link href="/login">
                    <button className=" border border-o " onClick={handleCart}>
                      Admin
                    </button>
                  </Nav.Link>
                  <Nav.Link href="/login">
                  <button className=" border border-o  " onClick={handleLogout}>
                     {token && "Logout"}
                    </button>
                    </Nav.Link>
                </Nav>
                </Col>
              </Navbar.Collapse>
            </Col>
            </Row>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default Header;
