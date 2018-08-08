import React, { Component } from 'react';
import './Landing.css';
import MainServices from '../../components/MainServices/MainServices';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">
        <div className="Landing__bg">
          <div className="Landing__bg__img Landing__bg__img--worldmap" />
          {/* <div className="Landing__bg__img Landing__bg__img--mockup" /> */}
        </div>
        <section>
          <div className="Landing__Cover">
            <div className="wrapper max-width--1500px">
              <h1 className="homepage-heading">
                We develop strategies that work.
              </h1>
            </div>
          </div>
        </section>
        
        <section>
          <div className="wrapper max-width--1500px">
            <MainServices />
          </div>
        </section>

      </div>
    );
  }

}

export default Landing;
