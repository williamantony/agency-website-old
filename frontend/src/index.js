import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './redux/reducers';

import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Landing from './pages/Landing/Landing';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore }>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/careers" component={Careers} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
