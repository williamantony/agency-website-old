import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      isFocused: false,
      isFilled: false,
    };
    console.log('render');
  }

  static getDerivedStateFromProps = (nextProps, nextState) => {
    return {
      value: nextProps.value,
      isFilled: nextProps.value !== '',
    };
  }
  
  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }
    this.setState({
      value,
      isFilled: value !== '',
    });
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  renderInput = () => {
    const { value } = this.state;
    const {
      id,
      name,
      type,
    } = this.props;

    const allowedTypes = [
      'text',
      'number',
      'password',
      'email',
      'tel',
      'textarea',
    ];

    if (!allowedTypes.includes(type)) {
      return null;
    }

    const input_tag = (
      <input
        className="Input__input__tag"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );

    const textarea_tag = (
      <textarea
        className="Input__input__tag"
        id={id}
        name={name}
        value={value}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );

    return (this.props.type === 'textarea') ? textarea_tag : input_tag;
  }

  render() {
    const {
      isFocused,
      isFilled,
    } = this.state;

    const {
      type,
      placeholder,
    } = this.props;

    return (
      <div
        className="Input"
        data-focused={isFocused}
        data-filled={isFilled}
        data-type={type}
      >
        <div className="Input__placeholder">
          <div className="Input__placeholder__text">{ placeholder }</div>
        </div>
        <div className="Input__input">
          { this.renderInput() }
        </div>
      </div>
    );
  }

}

export default Input;
