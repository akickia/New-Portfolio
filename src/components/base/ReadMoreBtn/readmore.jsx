import React from 'react';
import "./readmore.scss"

export const ReadMore = ({onClick, children}) => {
  return (
    <button className="readmore" onClick={onClick}> <p>{children}</p>
    </button>
  );
};