import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <header>
      <nav>
        <p>ADITYA FITNESS</p>
      </nav>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        {!isLoggedIn && (
          <>
            <li>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          </>
        )}

        {isLoggedIn && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
