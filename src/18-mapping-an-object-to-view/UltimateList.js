import React from "react";

const sourceObj = {
  val1: "Value 1",
  val2: "Value 2",
  val3: "Value 3",
  val4: "Value 4",
};

const UltimateList = () => {
  return (
    <section>
      <h1>Ultimate Object Listing</h1>
      <ol>
        {Object.keys(sourceObj).map((key) => (
          <li key={key}>{sourceObj[key]}</li>
        ))}
      </ol>
    </section>
  );
};

export default UltimateList;
