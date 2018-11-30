import React, { Component } from 'react';
import './CheckBox.css';
import CheckBoxItem from './CheckBoxItem/CheckBoxItem';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    const defaultOption = {
      label: props.label || '',
      name: props.name || '',
      value: props.value || '',
      isChecked: props.isChecked || false,
    };
    this.options = props.options || [defaultOption];
    this.name = props.name || 'unnamed';
    this.onChange = props.onChange;
    this.state = {
      values: {},
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
        {
          this.options.map((option, index) => (
            <CheckBoxItem key={index} {...option} onChange={this.handleChange} />
          ))
        }
      </div>
    );
  }

}

export default CheckBox;
