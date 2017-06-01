
import React, {Component} from 'react';

// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Base from './components/Base.jsx';
import NavBarAlt from './NavBarAlt.jsx';
import CreateDatePlan from './CreateDatePlan.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import MyDatePlan from './MyDatePlan.jsx';
import AllDatePlan from './AllDatePlan.jsx';

import '../styles/index.css'

class Routes extends Component {
  constructor(props) {
    super(props);
    // Initialize the state of this component with the default data object above.
    this.state = {};

    // Bind the function to handle the status change from the child.

  }

render() {
    return (

      <Router>

            <NavBarAlt>
              {/* <Route path='/home' component={HomePage} /> */}
              <Route path='/home' render={() => <HomePage />} />

              {/* <Route path='/logout' component={LogoutPage} /> */}
              <Route path='/profile' component={Profile} />
              <Route path='/alldatePlans' component={AllDatePlan} />
              <Route path='/myDatePlans' component={MyDatePlan} />
              <Route path='/createDatePlans' component={CreateDatePlan} />
            </NavBarAlt>

      </Router>

    );
  }
}
export default Routes;
