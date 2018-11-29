import React, { Component } from 'react';
import './CheckBoxItem.css';

class CheckBoxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
    };
  }

  toggleCheckBox = (event) => {
    event.preventDefault();
    this.setState({
      isChecked: !this.state.isChecked,
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.name);
    }
  }

  render() {
    return (
      <div
        className="CheckBoxItem"
        data-checked={this.state.isChecked}
        onClick={this.toggleCheckBox}
        tabIndex="0"
      >
        <input type="hidden" name={this.props.name} value={this.props.value} />
        <div className="CheckBoxItem__box">
          <div className="CheckBoxItem__box__tick">
            <div className="CheckBoxItem__box__tick__line CheckBoxItem__box__tick__line--first" />
            <div className="CheckBoxItem__box__tick__line CheckBoxItem__box__tick__line--second" />
          </div>
        </div>
        <div className="CheckBoxItem__label">
          <div className="CheckBoxItem__label__text">{ this.props.label }</div>
        </div>
      </div>
    );
  }

}

export default CheckBoxItem;