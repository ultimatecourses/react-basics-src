import React, { Fragment } from "react";
import { weatherData } from "./weatherData";

const Report = ({ match }) => {
  const { scale } = match.params;
  const data = weatherData(scale);

  return (
    <section>
      <h1>
        Your weather report in {scale.charAt(0).toUpperCase() + scale.slice(1)}
      </h1>
      <dl>
        {data.map((dataPoint) => (
          <Fragment key={dataPoint.city}>
            <dt>{dataPoint.city}</dt>
            <dd>{dataPoint.temp.toString()}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};

export default Report;
