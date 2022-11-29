import React, { Fragment } from "react";

const Counter = () => {
  const onClickHandler = () => {
    console.log("Button was pressed.");
  };

  return (
    <Fragment>
      <p>0</p>
      <button type="button" onClick={onClickHandler}>
        Increment
      </button>
    </Fragment>
  );
};

export default Counter;
