import React from "react";
import { Link } from "react-router-dom";

function HeaderN() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" style={{color : "red"}}> Hot Kitchen</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="#" className="nav-item nav-link">Available Orders</Link>
          <Link to="/addDriver" className="nav-item nav-link">Drivers</Link>
          <Link to="/comfirmOrder" className="nav-item nav-link">Comfirm Order</Link>
          {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
        </div>
      </div>
    </nav>
  )
}

export default HeaderN;