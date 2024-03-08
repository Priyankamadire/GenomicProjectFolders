import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <>
  <div className="container mt-3">
    <div className="card" style={{ width: 400 }}>
      <img
        className="card-img-top"
        src="https://tse1.mm.bing.net/th?id=OIP.ewvGzXWs5zHoEIq7BVhsyQHaHa&pid=Api&P=0&h=180"
        alt="Card image"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <div className="container mt-3">
          <form action="logopen.html">
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
              />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>
            {/* <button type="submit" class="btn btn-primary">Login</button> */}
            <Link to="/logopen" className="btn btn-primary">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  <br />
</>

    </div>
  )
}

export default Login
