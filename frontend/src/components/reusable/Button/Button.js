import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    
    return (
      <div className="Button">
        <button
          className="Button__button"
          style={{
            color: this.props.fontColor,
            backgroundColor: this.props.bgColor,
          }}
          onClick={this.props.onClick}
        >
          { this.props.children }
        </button>
      </div>
    );
  }

}

export default Button;
