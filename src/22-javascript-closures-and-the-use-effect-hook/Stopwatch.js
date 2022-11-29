import React, { useState, useEffect } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (counterActive) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [counterActive]);

  const onClickHandler = () => {
    setCounterActive((c) => !c);
  };

  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);

  return (
    <section className="stopwatch-frame">
      <h1>Ultimate Stopwatch</h1>
      <span>{formattedTime}</span>
      <button
        type="button"
        aria-pressed={!counterActive}
        onClick={onClickHandler}
      >
        Stop/Start
      </button>
    </section>
  );
};

export default Stopwatch;
