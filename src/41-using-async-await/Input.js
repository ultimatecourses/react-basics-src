import React, { useRef, Fragment } from "react";
import uniqid from "uniqid";

const Input = ({ type, labelText, ...props }) => {
  const id = useRef(uniqid());
  return (
    <Fragment>
      <label htmlFor={id.current}>{labelText}</label>
      {type === "textarea" ? (
        <textarea id={id.current} {...props} />
      ) : (
        <input id={id.current} {...props} />
      )}
    </Fragment>
  );
};

export default Input;
