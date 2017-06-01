class Auth {

  //Authenticate a user. Save a token string in Local Storage
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  //Authenticate a user. Save a token string in Local Storage
  static saveUserInfo(userData) {
    localStorage.setItem('uid', userData.uid);
    localStorage.setItem('name', userData.name);
    localStorage.setItem('email', userData.email);
  }

  static getUserID() {
    return localStorage.getItem('uid');
  }

  static getUserName() {
    return localStorage.getItem('name');
  }

  static getUserEmail() {
    return localStorage.getItem('email');
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
