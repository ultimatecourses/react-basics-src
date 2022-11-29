import React, { Fragment, useState } from "react";

const CounterView = ({ counterValue, onIncrement }) => (
  <Fragment>
    <p>{counterValue}</p>
    <button type="button" onClick={onIncrement}>
      Increment
    </button>
  </Fragment>
);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrementHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterView counterValue={counter} onIncrement={onIncrementHandler} />
  );
};

export default Counter;
