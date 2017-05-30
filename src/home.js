
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Routes from './routes.js';

import Base from './components/Base.jsx';
import NavBar from './components/navbar.js';
import CreateDatePlan from './components/createDatePlan.js';
import HomePage from './containers/HomePage.jsx';
import Profile from './components/profile.js';
import MyDatePlan from './components/myDatePlan.js';
import DatePlan from './components/allDatePlan.js';

import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

import './index.css'


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
registerServiceWorker();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>

      <Base>
        <div>
          <NavBar/>
          <Route path='/home' component={HomePage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/profile' component={Profile} />
          <Route path='/datePlans' component={DatePlan} />
          <Route path='/myDatePlans' component={MyDatePlan} />
          <Route path='/createDatePlans' component={CreateDatePlan} />
        </div>
      </Base>

    </Router>
  </MuiThemeProvider>), document.getElementById('root'));
