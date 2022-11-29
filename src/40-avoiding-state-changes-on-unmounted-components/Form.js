import React, { useState } from "react";
import Input from "./Input";

const initialEntryState = {
  recordName: "",
  artistName: "",
  description: "",
};

const Form = ({ onSubmit }) => {
  const [entry, setEntry] = useState(initialEntryState);

  const onChangeHandler = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!entry.recordName || !entry.artistName) {
      return;
    }

    onSubmit({ ...entry });
    setEntry(initialEntryState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        labelText="Record name"
        name="recordName"
        onChange={onChangeHandler}
        value={entry.recordName}
      />
      <Input
        labelText="Artist name"
        name="artistName"
        onChange={onChangeHandler}
        value={entry.artistName}
      />
      <Input
        type="textarea"
        labelText="description"
        name="description"
        onChange={onChangeHandler}
        value={entry.description}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
