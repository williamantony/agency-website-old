import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {  } from './redux/actions';
import './App.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Landing from './pages/Landing/Landing';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import WebsiteDesign from './pages/Services/WebsiteDesign/WebsiteDesign';
import AppDevelopment from './pages/Services/AppDevelopment/AppDevelopment';
import Marketing from './pages/Services/Marketing/Marketing';
import Branding from './pages/Services/Branding/Branding';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services/website-design" component={WebsiteDesign} />
          <Route exact path="/services/application-development" component={AppDevelopment} />
          <Route exact path="/services/branding" component={Branding} />
          <Route exact path="/services/seo" component={Marketing} />

          <Route exact path="/about" component={About} />
          <Route exact path="/careers" component={Careers} />

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));