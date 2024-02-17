import React from 'react';
import "./card.scss"

export const Card = ({title, subheading, children}) => {
  return (
    <article className='card'>
      <section className='heading'><h3>{title}</h3>
        <h5>{subheading}</h5></section>
      {children}
    </article>
  );
};