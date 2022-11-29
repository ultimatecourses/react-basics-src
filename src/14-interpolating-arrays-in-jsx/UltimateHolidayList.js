import React from "react";

const list = [
  { name: "The beach" },
  { name: "The mountains" },
  { name: "Vibrant cities" },
  { name: "Roughing it" },
  { name: "Ultimate survival" },
];

export const UltimateHolidayList = () => (
  <section>
    <h1>Ultimate Holiday Destinations</h1>
    <ul>{list}</ul>
  </section>
);

export default UltimateHolidayList;
