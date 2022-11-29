import React, { Fragment, useEffect, useState } from "react";

const subscribe = (count) => {
  console.log(`Subscribed for ${count}`);
};

const unsubscribe = (count) => {
  console.log(`Unsubscribe for ${count}`);
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter set to ${counter} | Ultimate Counter`;
  }, [counter]);

  useEffect(() => {
    subscribe(counter);

    return () => {
      unsubscribe(counter);
    };
  }, [counter]);

  const onCountClickHandler = () => {
    setCounter((c) => c + 1);
  };

  return (
    <Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
    </Fragment>
  );
};

export default Counter;
