import React, { useState } from "react";
import styles from "./Try.module.css";
import { Link } from "react-router-dom";
import { User } from "@phosphor-icons/react";

const Try: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleHideLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img src="logo.png" className="navbar-brand" alt="Brand Name" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <User name="shopping-cart-simple" className="nav-icon" />
          </li>
          <li className="nav-item">
            <User name="heart" className="nav-icon" />
          </li>
          <li className="nav-item">
            <User name="user" className="nav-icon" onClick={handleShowLogin} />
          </li>
        </ul>
        {showLogin && (
          <div className="login-form">
            <h5>Login</h5>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
              <button type="submit">Login</button>
            </form>
            <button onClick={handleHideLogin}>Close</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Try;
