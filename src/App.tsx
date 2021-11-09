/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import image1 from "./images/image-product-1-thumbnail.jpg";
import image2 from "./images/image-product-2-thumbnail.jpg";
import image3 from "./images/image-product-3-thumbnail.jpg";
import image4 from "./images/image-product-4-thumbnail.jpg";
import mainimage1 from "./images/image-product-1.jpg";
import mainimage2 from "./images/image-product-2.jpg";
import mainimage3 from "./images/image-product-3.jpg";
import mainimage4 from "./images/image-product-4.jpg";
import profile from "./images/image-avatar.png";

function App() {
  const [image, setImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const images = [image1, image2, image3, image4];
  const mainimages = [mainimage1, mainimage2, mainimage3, mainimage4];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="left-side">
          <div className="logo">sneakers</div>
          <div className="links">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#"> About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="right-side">
          <div className="cart"></div>
          <div className="profile">
            <img src={profile} alt="profile" className="profile" />
          </div>
        </div>
      </nav>
      <section className="product-page-wrapper">
        <div className="product-page">
          <div className="images">
            <div className="main-image">
              <img src={mainimages[image]} alt="main-sneaker" />
            </div>
            <div className="small-images">
              {images.map((m, idx) => {
                return (
                  <div className="single-image">
                    <img
                      src={m}
                      alt="small-images"
                      onClick={() => setImage(idx)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="details">
            <h4 className="company-logo">SNEAKER COMPANY</h4>
            <h1 className="title">Fall Limited Edition Sneakers</h1>
            <p className="description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="numbers">
              <div className="current-price">
                <h2 className="price">$125.00</h2>
                <p className="percentage">50%</p>
              </div>
              <h4 className="total-price">$250.00</h4>
            </div>
            <div className="quantity-cart">
              <div className="quantity-wrapper">
                <button
                  className="quantity-button"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <div className="quantity">{quantity}</div>
                <button
                  className="quantity-button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="add-to-cart"> Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
