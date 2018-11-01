import React, { Component } from 'react';
import './MockupPhone.css';
import image from '../../static/snapshot/websnapshot.png';

class MockupPhone extends Component {

  render() {
    return (
      <div className="MockupPhone">
      
        <div className="MockupPhone__body">
          <img src={image} />
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
    );
  }

}

export default MockupPhone;
