import React from 'react';
import './readmore.scss';

export const ReadMore = ({ onClick, children, link }) => {
  return (
    <>
      {link ? (
        <button className="readmore">
          <a href={link}>
            <p>{children}</p>
          </a>
        </button>
      ) : (
        <button className="readmore" onClick={onClick}>
          <p>{children}</p>
        </button>
      )}
    </>
  );
};
