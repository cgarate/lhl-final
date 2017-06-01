import Auth from './modules/Auth';
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';

import LoginRegister from './LoginRegister.jsx'

import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

import Routes from './containers/Routes.jsx'

// import NavTabs from './NavTabs.jsx'
import './index.css'

const defaultData = {
  loggedUser: { email: null,
                password: null,
  },
  authComponentSelected: null,
  registeredUser: { first_name: null,
                    last_name: null,
                    email: null,
                    username: null,
                    password: null},
};

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state of this component with the default data object above.
    this.state = defaultData;

    // Bind the function to handle the status change from the child.
    this.authOptionToRender = this.authOptionToRender.bind(this);
    this.informMeSignup = this.informMeSignup.bind(this);
    this.informMeLogin = this.informMeLogin.bind(this);

  }

  // function whatToRender(loggedUser) {
  //   if (loggedUser.email) {
  //     return
  //   }
  // }


  // Handlers go here.
  authOptionToRender(i) {
    this.setState({authComponentSelected: i});
  }

  informMeSignup(user) {
    this.setState({registeredUser: user});
  }

  informMeLogin(user) {
    this.setState({loggedUser: user});
  }



  componentWillMount() {
    if (Auth.isUserAuthenticated()) {
      this.setState({uid: Auth.getUserID()});
      let tempState = this.state.loggedUser;
      tempState.password = Auth.getToken();
      this.setState({tempState: tempState})
    }
  }

  render() {

    // If snippet to render either the login or the signup form.
    let theForm = null;
    if (this.state.authComponentSelected === 0) {
      theForm = <LoginPage informMe={this.informMeLogin} registeredUserFirst="" />;
    } else if (this.state.authComponentSelected === 1) {
      theForm = <SignUpPage informMe={this.informMeSignup}/>;
    }

    // if the user just registered, update the state and show the login page.
    if (this.state.registeredUser.first_name) {
      theForm = <LoginPage  registeredUserFirst={this.state.registeredUser.first_name}
                            informMe={this.informMeLogin} />;
    }

    return (
      <div>
        <MuiThemeProvider >
          {this.state.loggedUser.password === null ? (
            //Display the login and signup components
            <div>
              <LoginRegister authOptionToRender={this.authOptionToRender} />
              { theForm }
              {theForm === null ? (
                <div className="homepage">
                  <h3>Why Don't We?</h3>
                  {/* <h6>See these guys? Be these guys.</h6> */}
                </div>
               ) : (
                 <div />
               )}
            </div>
            // else display the app dashboard (user has logged in)
           ) : (
             <Routes />
           )}
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
