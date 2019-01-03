import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewCompany from './components/company/ViewCompany';
import ViewOffice from './components/office/ViewOffice';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div><Link to="/">ProSpace - Smart Office</Link></div>
          </div>

          <Switch>
            <Route path="/" component={ViewCompany} exact />
            <Route path="/office" component={ViewOffice} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;