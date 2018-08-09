import React, { Component } from 'react';
import './Landing.css';
import Button from '../../components/Button/Button';
import MainServices from '../../components/MainServices/MainServices';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">
        <section className="Landing__cover">
          <div className="wrapper max-width--1500px">
            <div className="Landing__cover__image" />
            <div className="Landing__cover__content">
              <div className="Landing__cover__content__holder">
                <h1 className="homepage-heading">
                  We develop strategies 
                  <br />that work.
                </h1>
                <button className="Landing__cover__button">Get Instant Quote</button>
              </div>
            </div>
          </div>
        </section>
                
        <section className="Landing__mainservices">
          <div className="wrapper max-width--1500px">
            <MainServices />
          </div>
        </section>

      </div>
    );
  }

}

export default Landing;
