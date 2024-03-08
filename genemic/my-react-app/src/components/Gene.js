import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Gene = () => {
  return (
    <div>
      <>
      <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <Link to="/gene">
        <p>gene analysis</p>
      </Link>
      <hr />
      <Link to="/hist">
        <p>My History</p>
      </Link>
      <hr />
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      Filters
    </button>
  </div>
  <div className="container mt-3">
    <div className="card" style={{ width: 400 }}>
      <img
        className="card-img-top"
        src="https://tse2.mm.bing.net/th?id=OIP.dGHin0m12V3pwJlyIfGZ-gAAAA&pid=Api&P=0&h=180"
        alt="Card image"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <div className="container mt-3">
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="name">Enter Gene sequence</label>
              <input
                type="name"
                className="form-control"
                id="email"
                placeholder="EX:ACTGACTGACTGACTg"
                name="name"
              />
            </div>
            <Link to="/" className="btn btn-primary">
              Predict output
            </Link>
          </form>
        </div>
      </div>
    </div>
    <br />
  </div>
</>

    </div>
  )
}

export default Gene
