import React, { Component } from 'react';
import './CrossBrowser.css';
import MockupBrowser from '../../MockupBrowser/MockupBrowser';

class CrossBrowser extends Component {

  render() {
    return (
      <div className="CrossBrowser">
        <div className="CrossBrowser__content">
          <div className="CrossBrowser__title">Cross Browser</div>
          <div className="CrossBrowser__subtitle">
            Browser compatability test is one of the most important step in our development process.
            This ensures that your website will work on all the popular browsers in the same way as expected.  
          </div>
          <div className="CrossBrowser__browsers">
            <div className="CrossBrowser__browsers__item" data-browser="chrome">

            </div>
            <div className="CrossBrowser__browsers__item" data-browser="firefox">

            </div>
            <div className="CrossBrowser__browsers__item" data-browser="safari">

            </div>
            <div className="CrossBrowser__browsers__item" data-browser="edge">

            </div>
            <div className="CrossBrowser__browsers__item" data-browser="opera">

            </div>
          </div>
        </div>
        <MockupBrowser />
      </div>
    );
  }

}

export default CrossBrowser;
