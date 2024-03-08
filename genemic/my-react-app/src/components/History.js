import React from 'react'
import { Outlet, Link } from "react-router-dom";
const History = () => {
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
  <br />
</>

    </div>
  )
}

export default History
