import React from "react";

const List = ({ records }) => (
  <ul>
    {records.map(({ recordName, artistName, description }) => (
      <li key={recordName}>
        <h3>{recordName}</h3>
        <span>{artistName}</span>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);

export default List;
