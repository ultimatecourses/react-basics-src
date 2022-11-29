import React, { Fragment } from "react";

const InteractiveView = ({ value, onAction, actionText }) => (
  <Fragment>
    <p>{value}</p>
    <button type="button" onClick={onAction}>
      {actionText}
    </button>
  </Fragment>
);

export default InteractiveView;
