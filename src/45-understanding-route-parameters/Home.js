import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section>
    <h1>Welcome to the weather report</h1>
    <p>
      Please select one of the option below to view the current weather in your
      temperature scale of choice!
    </p>
    <nav aria-label="Main">
      <ul>
        <li>
          <Link to="/reports/kelvin">View weather in Kelvin</Link>
        </li>
        <li>
          <Link to="/reports/celsius">View weather in Celsius</Link>
        </li>
        <li>
          <Link to="/reports/fahrenheit">View weather in Fahrenheit</Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Home;
