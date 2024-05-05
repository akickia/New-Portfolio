import React from 'react';
import './card.scss';

export const Card = ({ title, subheading, children, classname, line }) => {
  return (
    <article className={`card ${classname ? classname : ''}`}>
      <section className={`heading ${line ? 'line' : ''}`}>
        <h3>{title}</h3>
        <h5>{subheading}</h5>
      </section>
      {children}
    </article>
  );
};
