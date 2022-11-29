import React, { Fragment, useState } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";
import "./records.scss";

const Container = () => {
  const [records, setRecords] = useState([]);

  const onSubmitHandler = (entry) => {
    setRecords(
      [...records, entry].sort((a, b) => {
        if (a.recordName < b.recordName) {
          return -1;
        }
        if (a.recordName > b.recordName) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a new favourite">
          <Form onSubmit={onSubmitHandler} />
        </Section>
        <Section headingText="Records">
          <List records={records} />
        </Section>
      </main>
    </Fragment>
  );
};

export default Container;
