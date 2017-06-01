import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  headline: {
    fontSize: 12,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


export default class TabsExampleIconText extends React.Component {



  render() {
    return (
      <Tabs>
        <Tab
          icon={<FontIcon className="material-icons">verified_user</FontIcon>}
          label="Login"
          >

        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">card_membership</FontIcon>}
          label="Signup"
        />

      </Tabs>
    )
  }
}
