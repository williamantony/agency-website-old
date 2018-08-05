import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNavigationVisibility } from '../../redux/actions';
import './Hamburger.css';

class Hamburger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      opened: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      theme: props.theme.style,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      opened: !this.state.opened,
    });
    this.props.setNavigationVisibility(true);
  }

  render() {
    return (
      <div
        className="Hamburger"
        data-theme={this.state.theme}
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

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  setNavigationVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
