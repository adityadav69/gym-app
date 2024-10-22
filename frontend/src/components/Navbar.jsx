import React from "react";
import { Link as ScrollLink } from "react-scroll"; 

const Navbar = () => {
  return (
    <header>
      <nav>
        <p>ADITYA FITNESS</p>
      </nav>
      <ul className="nav">
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50} 
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
    </header>
    
  );
};

export default Navbar;
