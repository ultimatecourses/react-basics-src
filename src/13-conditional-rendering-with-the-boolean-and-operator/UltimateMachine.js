import React, { useState } from "react";

const ErrorMessage = ({ showError }) =>
  showError ? <span>Oh noes you broke it!</span> : null;

const UltimateMachine = () => {
  const [showError, setShowError] = useState(false);

  const onClickHandler = () => {
    setShowError((i) => !i);
  };

  return (
    <section>
      <h1>The Ultimate Machine</h1>
      <ErrorMessage showError={showError} />
      <button type="button" onClick={onClickHandler} aria-pressed={showError}>
        Toggle error
      </button>
    </section>
  );
};

export default UltimateMachine;
