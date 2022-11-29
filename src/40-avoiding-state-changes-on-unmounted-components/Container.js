import React, { Fragment, useState, useEffect, useRef } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";
import axios from "axios";
import "./records.scss";

const sortRecords = (records) =>
  records.sort((a, b) => {
    if (a.recordName < b.recordName) {
      return -1;
    }
    if (a.recordName > b.recordName) {
      return 1;
    }
    return 0;
  });

const Container = ({ setShowApp }) => {
  const [records, setRecords] = useState([]);
  const [liveText, setLiveText] = useState("");
  const isMounted = useRef(true);

  useEffect(() => {
    axios.get("/api/records").then(({ data }) => {
      if (isMounted.current) {
        setRecords(sortRecords(data));
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onSubmitHandler = (entry) => {
    axios.post("/api/records", entry).then(({ data }) => {
      if (isMounted.current) {
        setRecords(sortRecords([...records, data]));
        setLiveText(`${entry.recordName} successfully added.`);
      }
    });
    setShowApp(false);
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
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};

const Wrapper = () => {
  const [showApp, setShowApp] = useState(true);

  return showApp && <Container setShowApp={setShowApp} />;
};

export default Wrapper;
