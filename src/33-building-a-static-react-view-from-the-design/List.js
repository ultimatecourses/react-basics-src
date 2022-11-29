import React from "react";

const records = [
  {
    recordName: "React Rave",
    artistName: "The Developers",
    description: "A rocking good rave bopping to the tune of JavaScript",
  },
  {
    recordName: "Bulding an App",
    artistName: "The Components",
    description: "Sounds of the future.",
  },
];

const List = () => (
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
