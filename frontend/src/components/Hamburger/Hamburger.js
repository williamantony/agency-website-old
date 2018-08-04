import React, { Component } from 'react';
import './Hamburger.css';

class Hamburger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <div
        className="Hamburger"
        onClick={this.handleClick}
      >
        <div
          className="icon"
          data-open={this.state.opened}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    );
  }

}

export default Hamburger;
