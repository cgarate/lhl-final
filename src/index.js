
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
//import Routes from './routes.js';
//import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth.js';
import './index.css'


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>

      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <NavLink to="/">Home</NavLink>
          </div>

          {Auth.isUserAuthenticated() ? (
            <div className="top-bar-right">
              <Link to="/logout">Log out</Link>
            </div>
          ) : (
            <div className="top-bar-right">
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          )}
        </div>


        <Route path='/' component={HomePage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LoginPage} />
        {/* <Route path='/logout' component={Logout} /> */}
      </div>
    </Router>
  </MuiThemeProvider>), document.getElementById('root'));
