import React from "react";

const list = [
  "The beach",
  "The mountains",
  "Vibrant cities",
  "Roughing it",
  "Ultimate survival",
];

const UltimateHolidayList = () => (
  <section>
    <h1>Ultimate Holiday Destinations</h1>
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </section>
);

export default UltimateHolidayList;
