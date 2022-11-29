import React, { useState, Fragment } from "react";

const list1 = [
  "The beach",
  "The mountains",
  "Vibrant cities",
  "Roughing it",
  "Ultimate survival",
];

const list2 = [
  "The beach",
  "Roughing it",
  "Vibrant cities",
  "The mountains",
  "Ultimate survival",
];

const UltimateHolidayList = () => {
  const [list, setList] = useState(list1);

  const onClickHandler = () => {
    setList(list === list1 ? list2 : list1);
  };

  const displayList = list.map((item, index) => (
    <Fragment key={item}>
      <li>
        <label htmlFor={`item-${index}`}>{item}</label>
        <input id={`item-${index}`} />
      </li>
    </Fragment>
  ));

  return (
    <section>
      <h1>Ultimate Holiday Destinations</h1>
      <ul>{displayList}</ul>
      <button type="button" onClick={onClickHandler}>
        Change
      </button>
    </section>
  );
};

export default UltimateHolidayList;
