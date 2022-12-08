import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" href="/">
          Crud App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/users/add"} className="btn btn-outline-light">
          Add user
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



// import React from 'react';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//       <a className="navbar-brand">Crud App</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item active">
//           <Link className="nav-link" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/about">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">Contact</Link>
//         </li>
        
        
//       </ul>
      
    
//     </div>
//     </div>
      
//       </nav>
  
//   )
// }

// export default Navbar;