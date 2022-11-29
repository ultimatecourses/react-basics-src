import React, { Fragment, useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter set to ${counter} | Ultimate Counter`;
    console.log("Title was set");
  }, [counter]);

  useEffect(() => {
    const savedCounterValue = localStorage.getItem("ultimateCounter");
    if (savedCounterValue != null) {
      setCounter(parseInt(savedCounterValue, 10));
    }
  }, []);

  const onCountClickHandler = () => {
    setCounter((c) => c + 1);
  };

  const onSaveClickHandler = () => {
    localStorage.setItem("ultimateCounter", counter);
  };

  return (
    <Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onSaveClickHandler}>
        Save counter value
      </button>
    </Fragment>
  );
};

export default Counter;
