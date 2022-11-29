import React from "react";
import Helmet from "react-helmet";

const Section = ({ children, headingText, headingLevel = 1 }) => {
  const H = `h${headingLevel}`;
  return (
    <section>
      <Helmet>
        <title>{`${headingText} | Ultimate Weather Report`}</title>
      </Helmet>
      <H>{headingText}</H>
      {children}
    </section>
  );
};

export default Section;
