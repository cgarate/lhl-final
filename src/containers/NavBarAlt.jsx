import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
//import '../styles/navbar.css';

class NavBarAlt extends Component {
  render() {
    return (
      <div>
        <Tabs onChange={this.changeTab} value="3">
         <Tab
           value={0}
           label="Home"
           containerElement={<Link to="/home"/>}
           icon={<FontIcon className="material-icons">home</FontIcon>}
         />
         <Tab
           value={1}
           label="Profile"
           containerElement={<Link to="/profile"/>}
           icon={<FontIcon className="material-icons">face</FontIcon>}
         />
         <Tab
           value={2}
           label="My Date Plans"
           containerElement={<Link to="/myDatePlans"/>}
           icon={<FontIcon className="material-icons">favorite</FontIcon>}
         />
         <Tab
           value={3}
           label="All Date Plans"
           containerElement={<Link to="/allDatePlans"/>}
           icon={<FontIcon className="material-icons">toc</FontIcon>}
         />
         <Tab
           value={4}
           label="Create Date Plans"
           containerElement={<Link to="/createDatePlans"/>}
           icon={<FontIcon className="material-icons">assignment</FontIcon>}
         />
        </Tabs>
        { this.props.children }
      </div>


    );
  }
}

export default NavBarAlt;
