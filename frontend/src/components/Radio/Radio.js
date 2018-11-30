import React, { Component } from 'react';
import './Radio.css';
import RadioItem from './RadioItem/RadioItem';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || '';
    this.options = props.options || [];
    this.onChange = props.onChange;
    this.state = {
      value: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  toggleOption = (event, value) => {
    event.preventDefault();
    this.setState({
      value,
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div className="Radio">
        {
          this.options.map((option, index) => (
            <RadioItem
              key={index}
              label={option.label}
              isChecked={option.value === this.state.value}
              onClick={(e) => this.toggleOption(e, option.value)}
            />
          ))
        }
      </div>
    );
  }

}

export default Radio;
