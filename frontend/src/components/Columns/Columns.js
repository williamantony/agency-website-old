import React from 'react';
import './Columns.css';

const Columns = (props) => {
  const style = props.style || {};
  return (
    <div className="Columns" style={style}>
      { props.children }
    </div>
  );
}

export default Columns;
