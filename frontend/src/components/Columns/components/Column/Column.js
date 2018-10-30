import React from 'react';
import './Column.css';

const Column = (props) => {
  const style = {
    ...(props.style || {}),
    flexBasis: `${100 / props.row}%` || '100%',
  };
  return (
    <div className="Column" style={style}>
      { props.children }
    </div>
  );
};

export default Column;
