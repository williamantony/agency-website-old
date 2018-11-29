import React, { Component } from 'react';
import './Radio.css';
import RadioItem from './RadioItem/RadioItem';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.options = props.options || [];
    this.state = {
      value: '',
    };
  }

  toggleOption = (event, value) => {
    event.preventDefault();
    this.setState({
      value,
    });
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
