import React, { Component } from 'react';
import './CheckBox.css';
import CheckBoxItem from './CheckBoxItem/CheckBoxItem';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    const defaultOption = {
      label: props.label || '',
      value: props.value || '',
      isChecked: props.isChecked || false,
    };
    this.options = props.options || [defaultOption];
    this.name = props.name || 'unnamed_checkbox';
    this.onChange = props.onChange;
    this.state = {
      values: {},
    };
  }

  static getDerivedStateFromProps = (nextProps, nextState) => {
    return {
      values: nextProps.value,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.state.values) !== JSON.stringify(nextState.values);
  }

  handleChange = (name, value) => {
    const values = {
      ...this.state.values,
      [name]: value,
    };
    if (typeof this.onChange === 'function') {
      this.onChange(values);
    }
    this.setState({ values });
  }

  render() {
    return (
      <div className="CheckBox">
        <input
          type="hidden"
          name={this.name}
          value={JSON.stringify(this.state.values)}
        />
        <div className="CheckBox__content">
          {
            this.options.map((option, index) => {
              return (
              <CheckBoxItem
                key={index}
                {...option}
                isChecked={this.state.values[option.value] || false}
                onChange={this.handleChange}
              />
            )})
          }
        </div>
      </div>
    );
  }

}

export default CheckBox;
