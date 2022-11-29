import React, { useState } from "react";

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
      <label htmlFor="recordName">Record name</label>
      <input
        id="recordName"
        name="recordName"
        onChange={onChangeHandler}
        value={entry.recordName}
      />
      <label htmlFor="artistName">Artist name</label>
      <input
        id="artistName"
        name="artistName"
        onChange={onChangeHandler}
        value={entry.artistName}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={onChangeHandler}
        value={entry.description}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
