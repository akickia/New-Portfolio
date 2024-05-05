import React from 'react';
import './heading.scss';

export const Heading = ({ children, type }) => {
  return (
    <section className={`heading-container ${type}`}>
      <h1 className="heading">{children}</h1>
      <div className="subtitle__line"></div>
    </section>
  );
};
