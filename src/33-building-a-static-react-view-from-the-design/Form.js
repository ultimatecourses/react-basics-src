import React from "react";

const Form = () => (
  <form>
    <label htmlFor="recordName">Record name</label>
    <input id="recordName" name="recordName" />
    <label htmlFor="artistName">Artist name</label>
    <input id="artistName" name="artistName" />
    <label htmlFor="description">Description</label>
    <textarea id="description" name="description" />
    <button type="submit">Add</button>
  </form>
);

export default Form;
