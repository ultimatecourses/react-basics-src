import React, { Fragment } from "react";
import { weatherData } from "./weatherData";
import Section from "./Section";

const Report = ({ match }) => {
  const { scale } = match.params;
  const data = weatherData(scale);

  const headingText = `Your weather report in ${
    scale.charAt(0).toUpperCase() + scale.slice(1)
  }`;

  return (
    <Section headingText={headingText}>
      <dl>
        {data.map((dataPoint) => (
          <Fragment key={dataPoint.city}>
            <dt>{dataPoint.city}</dt>
            <dd>{dataPoint.temp.toString()}</dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
};

export default Report;
