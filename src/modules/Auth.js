class Auth {

  //Authenticate a user. Save a token string in Local Storage
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  //Check if a user is authenticated - check if a token is saved in Local Storage
  static isUserAuthenticated() {
    if (localStorage.getItem('token') === null || localStorage.getItem('token') === false) {
      return false;
    } else { return true }
  }

   //Deauthenticate a user. Remove a token from Local Storage.
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  //Get a token value.
  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;
