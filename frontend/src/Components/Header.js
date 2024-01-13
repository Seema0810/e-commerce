import React from "react";
import "../Css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button, Form, InputGroup } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {  
  const navigate= useNavigate();
  const addProducts = useSelector((state) => state.cart.cartItems);
  console.log("cart icons products are", addProducts);
  const handleCart= ()=>{
    navigate('/cart');
  }
  
  return (
    <>
      <Container fluid>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row>
          <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Col xs={6} md={2}>
            <Dropdown 
            className="d-inline-flex "
            // style={{display:"inline-flex",position:"fixed"}}
            >
      <Dropdown.Toggle variant="white" id="dropdown-basic">
      <img src="https://image.freepik.com/free-icon/menu-button-of-three-lines_318-70878.jpg" className="mx-2" style={{height:"30px", width:"25px"}}/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Kids</Dropdown.Item>
        <Link to="/women"><Dropdown.Item href="#/action-2">Women</Dropdown.Item></Link>
       
      </Dropdown.Menu>
    </Dropdown>
             
              <Navbar.Brand href="#home">Businice</Navbar.Brand>
            </Col>
            <Col xs={6} md={4}>
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
      </Col>
       

          <Col xs={6} md={6} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navlink-style">
              <Nav className="me-auto">
                <Nav.Link href="#home" ><button className=" border border-o" onClick={handleCart}><i className="fa-solid fa-cart-shopping"></i></button></Nav.Link>                
                <NavDropdown title="Basir" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Seller" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
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
