import React, { useState } from "react";
import "../Css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../config";
import axios from "axios";
import SearchPage from "./SearchPage";

const Header = () => {
  const [searchItem, setSearchItem] = useState();
  const [searchedProducts, setSearchedProducts] = useState([]);
  const navigate = useNavigate();
  const addProducts = useSelector((state) => state.cart.cartItems);
  localStorage.setItem("cart", addProducts);
  console.log("cart icons products are", addProducts);

  //finding the total no. of items in cart
  const totalItemsInCart=()=>{
    return addProducts.reduce((total, product)=>{
      return total+ product.reduce((productTotal, item)=>{
        return productTotal+ item.quantity; 
      },0)
    },0)
  }

  const itemsInCart= totalItemsInCart();
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
    navigate("/")
  }

  return (
    <>
      <Container fluid>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row>
          <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Col xs={6} md={2}>
              <Dropdown
                className=" nav-image d-inline-flex "
                // style={{display:"inline-flex",position:"fixed"}}
              >
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  <img
                    src="https://image.freepik.com/free-icon/menu-button-of-three-lines_318-70878.jpg"
                    className="border border-0 mx-2"
                    style={{ height: "30px", width: "25px" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Kids</Dropdown.Item>
                  <Link to="/women">
                    <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              <Navbar.Brand href="#home">Businice</Navbar.Brand>
            </Col>
            <Col xs={6} md={4}>
              <InputGroup className="justify-content-center ">
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

            <Col xs={6} md={6}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="navlink-style">
                <Nav className="mx-auto ">
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
                  <button className=" border border-o " onClick={handleLogout}>
                     Logout
                    </button>
                    </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default Header;
