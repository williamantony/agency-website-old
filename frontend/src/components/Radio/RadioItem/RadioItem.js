import React from 'react';
import './RadioItem.css';

const RadioItem = (props) => (
  <div
    className="RadioItem"
    data-checked={props.isChecked}
    onClick={props.onClick}
    tabIndex="0"
  >
    <div className="RadioItem__box">
      <div className="RadioItem__box__tick">
        <div className="RadioItem__box__tick__line RadioItem__box__tick__line--first" />
        <div className="RadioItem__box__tick__line RadioItem__box__tick__line--second" />
      </div>
    </div>
    <div className="RadioItem__label">
      <div className="RadioItem__label__text">{props.label}</div>
    </div>
  </div>
);

export default RadioItem;
