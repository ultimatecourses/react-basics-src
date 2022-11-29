import React, { Fragment, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onClickHandler}>
        Increment
      </button>
    </Fragment>
  );
};

export default Counter;
