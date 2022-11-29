import React from "react";

const List = ({ records }) => (
  <ul>
    {records.map(({ id, recordName, artistName, description }) => (
      <li key={id.toString()}>
        <h3>{recordName}</h3>
        <span>{artistName}</span>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);

export default List;
