/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

function App() {
  const [image, setImage] = React.useState(0);

  const images = ["", "", "", ""];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">sneakers</div>
        <div className="links">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#"> About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <section className="product-page-wrapper">
        <div className="product-page">
          <div className="images">
            <div className="main-image"></div>
            <div className="small-images">
              {images.map((m) => {
                return (
                  <div className="single-image">
                    <img src={m} alt="small-images" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="details"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
