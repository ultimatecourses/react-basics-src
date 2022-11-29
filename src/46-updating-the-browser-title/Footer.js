import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <nav aria-label="Secondary">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
