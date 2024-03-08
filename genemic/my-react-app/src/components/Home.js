import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <>
      <>
  
  <br />
  <br />
  
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <center>
        <div className="carousel-item active">
          <img
            src="https://www.epigentek.com/catalog/images/extract.gif"
            className="d-block"
            style={{ width: 800, height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Pxhnt-DN7b2zMhX7PV5JDQHaE8&pid=Api&P=0&h=180"
            className="d-block"
            width="800px"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.labroots.com/content_article_profile_image_2d985e79c3de03067efb959ddce57d65c3127686_5760.jpg"
            className="d-block"
            width="800px"
          />
        </div>
      </center>
    </div>
    {/* Left and right controls/icons */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
  <br />
  <br />
</>

      </>
    </div>
  )
}

export default Home
