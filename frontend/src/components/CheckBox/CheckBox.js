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
      isChecked: props.checked || false,
    };
    this.options = props.options || [defaultOption];
  }

  render() {
    return (
      <div className="CheckBox">
        {
          this.options.map((option, index) => (
            <CheckBoxItem key={index} {...option} onChange={this.props.onChange} />
          ))
        }
      </div>
    );
  }

}

export default CheckBox;
