import React, { useState } from "react";

const OnMessage = () => <span>The machine is ON!</span>;

const OffMessage = () => <span>The machine is OFF!</span>;

const OnOff = ({ isOn }) => {
  if (isOn) {
    return <OnMessage />;
  } else {
    return <OffMessage />;
  }
};

const UltimateMachine = () => {
  const [isOn, setIsOn] = useState(false);

  const onClickHandler = () => {
    setIsOn((i) => !i);
  };

  const getMessage = () => {
    if (isOn) {
      return <OnMessage />;
    } else {
      return <OffMessage />;
    }
  };

  return (
    <section>
      <h1>The Ultimate Machine</h1>
      {getMessage()}
      <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
        On/Off
      </button>
    </section>
  );
};

export default UltimateMachine;
