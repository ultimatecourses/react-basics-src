import React, { Fragment, useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [internalCount, setInternalCount] = useState(0);

  useEffect(() => {
    document.title = `Counter set to ${counter} | Ultimate Counter`;
    console.log("Title was set");
  }, [counter]);

  const onCountClickHandler = () => {
    setCounter((c) => c + 1);
  };

  const onInternalCountClickHandler = () => {
    setInternalCount((i) => i + 1);
  };

  console.log("Main render return");

  return (
    <Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onInternalCountClickHandler}>
        Increment internal count
      </button>
    </Fragment>
  );
};

export default Counter;
