import React, {Component} from 'react';
import LoginRegister from './LoginRegister';

class BackgroundImage extends Component {

  render() {

    return (
      <div>
        <div className="midcentered">
          <LoginRegister authOptionToRender={this.props.authOptionToRender} />
          <h3>Why Don't We?</h3>
        </div>
        <div>
          <h5>See these guys? Be these guys.</h5>
        </div>
      </div>
    );
  }
}
export default BackgroundImage
