import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Logopen = () => {
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
</>

    </div>
  )
}

export default Logopen
