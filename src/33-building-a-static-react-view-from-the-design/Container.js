import React, { Fragment } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";
import "./records.scss";

const Container = () => (
  <Fragment>
    <Header />
    <main>
      <Section headingText="Add a new favourite">
        <Form />
      </Section>
      <Section headingText="Records">
        <List />
      </Section>
    </main>
  </Fragment>
);

export default Container;
