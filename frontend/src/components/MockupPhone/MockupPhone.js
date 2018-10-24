import React, { Component } from 'react';
import './MockupPhone.css';

class MockupPhone extends Component {

  render() {
    return (
      <div className="MockupPhoneContainer">
        <div className="MockupPhone">
        
          <div className="MockupPhone__body">
          
          </div>
          <div className="MockupPhone__frame">
            <div className="MockupPhone__frame__top">
              <div className="speaker" />
              <div className="camera">
                <div className="lens" />
              </div>
            </div>
            <div className="MockupPhone__frame__buttons">
              <div className="MockupPhone__frame__buttons__left">
                <div className="button" />
                <div className="button" />
                <div className="button" />
              </div>
              <div className="MockupPhone__frame__buttons__right">
                <div className="button" />
              </div>
            </div>
            <div className="MockupPhone__frame__bottom" />
          </div>

        </div>
      </div>
    );
  }

}

export default MockupPhone;
