import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    console.log('Scroll');
  }

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }

}

export default Page;
