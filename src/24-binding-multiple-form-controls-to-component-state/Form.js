import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });

  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <span>{`Your name is ${formState.firstName} ${formState.lastName}`}</span>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        onChange={onChangeHandler}
        value={formState.firstName}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        onChange={onChangeHandler}
        value={formState.lastName}
      />
    </form>
  );
};

export default Form;
