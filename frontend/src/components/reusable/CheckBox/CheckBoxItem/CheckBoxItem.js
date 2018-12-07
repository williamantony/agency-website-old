import React, { Component } from 'react';
import './CheckBoxItem.css';

class CheckBoxItem extends Component {
  constructor(props) {
    super(props);
    this.value = props.value;
    this.onChange = props.onChange;
    this.state = {
      isChecked: props.isChecked || false,
    };
  }

  static getDerivedStateFromProps = (nextProps, nextState) => {
    return {
      isChecked: nextProps.isChecked,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isChecked !== nextState.isChecked;
  }

  toggleCheckBox = (event) => {
    event.preventDefault();
    const isChecked = !this.state.isChecked;

    if (typeof this.onChange === 'function') {
      this.onChange(this.value, isChecked);
    }
    this.setState({ isChecked });
  }

  render() {
    return (
      <div
        className="CheckBoxItem"
        data-checked={this.state.isChecked}
        onClick={this.toggleCheckBox}
        tabIndex="0"
      >
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
