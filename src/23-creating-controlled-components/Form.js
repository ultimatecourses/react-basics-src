import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");

  const onChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <form>
      <span>{firstName}</span>
      <label htmlFor="firstName">First name</label>
      <input id="firstName" onChange={onChangeHandler} value={firstName} />
    </form>
  );
};

export default Form;
