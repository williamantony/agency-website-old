import React, { Component } from 'react';
import './About.css';
import Page from '../../components/reusable/Page/Page';

class About extends Component {

  render() {
    return (
      <Page className="About">
        <section className="page-heading">
          <div className="wrapper max-width--1200px">
            <h1 className="page-heading__title">About Us</h1>
          </div>
        </section>
      </Page>
    );
  }

}

export default About;
