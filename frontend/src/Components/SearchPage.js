import React from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const SearchPage = () => {  
    const { state } = useLocation(); // Import useLocation from 'react-router-dom'
  const searchedProducts = state?.searchedProducts;
  return (
    <>
       <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={11} className="mx-5">
            <h2 className="mt-5">Product Information:</h2>
            {searchedProducts.map((searchedProduct)=>{
                return(
                    <Card key={searchedProduct.id}>
                    <Card.Body>
                      <Row>
                        <Col md={6} className="d-inline-flex">
                          <img
                            src={searchedProduct.image}
                            className="border border-2 p-2 img-fluid rounded "
                            style={{ height: "8rem", width: "8rem" }}
                          />
                          <a
                            href="/"
                          //   style={{ fontSize: "13px" }}
                            className="mt-5 mx-3 fs-6"
                          >
                            <b>{searchedProduct.title}</b>
                          </a>
                        </Col>
                       
                        <Col md={1} className="d-inline-flex mx-4 ">
                          <span className="m-2 fs-3 mt-5">${searchedProduct.price}</span>
                        </Col>
                        <Col md={1} className="mx-5">
                          <button className="btn btn-danger border-0  mt-5 rounded-end-circle">
                             View
                          </button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )
            })}
           
          </Col>
        </Row>
        <p className="text-center m-5 text-secondary">
          <b>All rights reserved</b>
        </p>
      </Container>
    </>
  )
}

export default SearchPage