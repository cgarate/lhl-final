import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const verifiedUser = <FontIcon className="material-icons">verified_user</FontIcon>;
const cardMembership = <FontIcon className="material-icons">card_membership</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class LoginRegister extends Component {

  constructor(props) {
    super(props);
    // Initialize the state of this component with the default data object above.
    this.state = {
      selectedIndex: null,

    };
    // Bind the function to handle the status change from the child.
    // this.authOptionToRender = this.authOptionToRender.bind(this);
  }

  select = (index) => {
    this.setState({selectedIndex: index});
    this.props.authOptionToRender(index);
  }

  render() {

    return (
      <div>
        <div className="midcentered">
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Login"
                icon={verifiedUser}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Register"
                icon={cardMembership}
                onClick={() => this.select(1)}
              />
            </BottomNavigation>
          </Paper>

        </div>
      </div>

    );
  }
}

export default LoginRegister;
