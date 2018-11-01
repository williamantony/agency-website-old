import React, { Component } from 'react';
import './MockupBrowser.css';
import image from '../../static/snapshot/websnapshot.png';

class MockupBrowser extends Component {

  render() {
    return (
      <div className="MockupBrowser">
        <div className="MockupBrowser__header">
          <div className="MockupBrowser__header__actions">
            <div className="MockupBrowser__header__actions__buttons" />
            <div className="MockupBrowser__header__actions__buttons" />
            <div className="MockupBrowser__header__actions__buttons" />
          </div>
          <div className="MockupBrowser__header__addressbar">
            <div className="MockupBrowser__header__addressbar__text">
              <span className="protocol">https://</span>
              www.willsquad.com/
            </div>
            <div className="MockupBrowser__header__reload" />
          </div>
        </div>
        <div className="MockupBrowser__body">
          <img src={image} />
        </div>
      </div>
    );
  }

}

export default MockupBrowser;
