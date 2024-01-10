import React from "react";
import "../Css/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <>
      {/* <!-- carousel for featured products started --> */}
      <div class="bg-light container">
        <h1 class="text-center">Featured Products</h1>
        {/* <!-- card carosel with slider started from here --> */}
        <div
          id="carouselExampleControls"
          class="carousel slide carousel-dark"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="cards-wrapper d-flex">
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.BKUXs39kKRlvfAeIiWCB5gHaEK&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">Pants</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="mr-2"
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.cF269Ylne2B3O6Gj3nG_FwHaI8&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Coats</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="mr-2"
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.gNAPEphxf74Zul2dmZ0GxQHaE7&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="mr-2"
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.gNAPEphxf74Zul2dmZ0GxQHaE7&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="mr-2"
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.gNAPEphxf74Zul2dmZ0GxQHaE7&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="mr-2"
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex">
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.VvfoOfBxvzFAHRDTMTd0BAHaLH&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.Y_ZGBScj44AfgNf8zm36cgHaLE&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.-e_PiXyy7JUI6SCDExQl4wHaFy&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.-e_PiXyy7JUI6SCDExQl4wHaFy&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.-e_PiXyy7JUI6SCDExQl4wHaFy&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper d-flex">
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://img77.uenicdn.com/image/upload/v1558922834/business/f1dce27c-26af-4703-b440-5606c73486ae/shopping-womens-clothingjpg.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://media.istockphoto.com/photos/clothes-picture-id485810060?k=6&m=485810060&s=612x612&w=0&h=S0pIjlYkgWL1hLE2oxcVjNI0-00hWZguq26ilQRyxvc="
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.TBWMPZxwsnostos6ZU1KowHaFj&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.gNAPEphxf74Zul2dmZ0GxQHaE7&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
                <div class="card m-2 text-center card-carousel">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.gNAPEphxf74Zul2dmZ0GxQHaE7&pid=Api&P=0&h=180"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dresses</h5>
                    <div class="card-text">
                      <p>$15</p>
                      <p>Some quick example text to</p>
                    </div>
                    <a href="/" class="btn cart-btn">
                      <i class="fa-solid fa-cart-shopping m-1"></i>Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>

      {/* <!-- carousel for featured products ended --> */}
    </>
  );
};

export default Slider;
