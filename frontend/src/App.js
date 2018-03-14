import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
