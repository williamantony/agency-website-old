import React, { Component } from 'react';
import './MockupBrowser.css';

class MockupBrowser extends Component {

  render() {
    return (
      <div className="MockupBrowserContainer">

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
          
          </div>
        </div>

      </div>
    );
  }

}

export default MockupBrowser;
