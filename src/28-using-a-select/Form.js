import React, { useState } from "react";
import "./form.css";

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
  transport: "",
};

const Form = () => {
  const [formState, setFormState] = useState(initialState);

  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    setFormState(initialState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
      <label htmlFor="biography">Biography</label>
      <textarea
        id="biography"
        name="biography"
        row="10"
        onChange={onChangeHandler}
        value={formState.biography}
      />
      <label htmlFor="transport">Preferred transport</label>
      <select
        id="transport"
        name="transport"
        onChange={onChangeHandler}
        value={formState.transport}
      >
        <option>None selected</option>
        <option value="planes">Planes</option>
        <option value="trains">Trains</option>
        <option value="cars">Cars</option>
        <option value="boats">Boats</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={onClickHandler}>
        Clear Values
      </button>
    </form>
  );
};

export default Form;
