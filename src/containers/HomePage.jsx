import React, { Component } from 'react';
import Auth from '../modules/Auth';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import '../styles/home.css';
import MobileTearSheet from '../components/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectable: false,
      showCheckBoxes: false,
      user: {
        email: '',
        password: ''
      },
      dateplans: []
    };
  };

  getAllUsersReact() {
    // Put a call to user's events here
    //var that = this;
    var url = 'http://localhost:8080/api/users/'

    fetch(url)
    .then( (response) => {
      if (response.status !== 200) {
        throw new Error("Error code: ", response.status);
      }
      return response.json()
      .then( (data) => {
        console.log(data);
        // that.setState({ person: data.person });
      }, (reject) => {
        console.error("Fetch rejected: ", reject);
      })
    }, (reject) => {
      console.error("Fetch rejected: ", reject)
    })
    .catch( (err) => {
      console.error("Fetch in Homepage.jsx failed: ", err)
    })
  }

  getDatePlans() {
    let url = "http://localhost:8080/api/plans/plan_user/"
    url = url.concat(Auth.getUserID())
    fetch(url)
    .then( (response) => {
      if (response.status !== 200) {
        throw new Error("Error code: ", response.status);
      }
      return response.json()
      .then( (result) => {
        let datePlans = this.state.datePlans;
        datePlans = result;
        this.setState({dateplans: datePlans});

      }, (reject) => {
        console.error("Fetch rejected: ", reject);
      })
    }, (reject) => {
      console.error("Fetch rejected: ", reject)
    })
    .catch( (err) => {
      console.error("Fetch in Homepage.jsx failed: ", err)
    })
  }

  componentDidMount() {

    //this.getAllUsersReact();
    this.getDatePlans();
    Auth.getUserID();
    Auth.getUserName();
  }

  render() {
    return (
      <div className="mainSection">
        <div className="pageTitle">User Dashboard</div>
        <div className="eventsSection">
          <div className="sectionTitle">Upcoming Dates</div>
          <div className="eventsList">
            <Table className="tableAlign">
              <TableHeader
                displaySelectAll={this.state.showCheckBoxes}
                adjustForCheckbox={this.state.showCheckBoxes}
              >
                <TableRow>
                  <TableHeaderColumn className="tableCellStyle">Date Name</TableHeaderColumn>
                  <TableHeaderColumn className="tableCellStyle">Date Plan</TableHeaderColumn>
                  <TableHeaderColumn className="tableCellStyle">Date/Time</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckBoxes}
              >
              <TableRow>
                <TableRowColumn className="tableCellStyle">Casey</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Park</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 2 2017 12:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Rebecca</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Club</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 3 2017 10:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Casey</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Park</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 2 2017 12:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Rebecca</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Club</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 3 2017 10:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Casey</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Park</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 2 2017 12:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Rebecca</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Club</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 3 2017 10:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Casey</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Park</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 2 2017 12:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Rebecca</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Club</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 3 2017 10:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Casey</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Park</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 2 2017 12:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Rebecca</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Club</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 3 2017 10:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Casey</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Park</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 2 2017 12:00pm</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="tableCellStyle">Rebecca</TableRowColumn>
                <TableRowColumn className="tableCellStyle">The Club</TableRowColumn>
                <TableRowColumn className="tableCellStyle">June 3 2017 10:00pm</TableRowColumn>
              </TableRow>
              </TableBody>
            </Table>

          </div>
        </div>

        <div className="datePlanSection">
          <div className="sectionTitle">My Date Plans</div>
          <div className="datePlanList">
            <MobileTearSheet>
              <List>
                {this.state.dateplans.map( (dateplan) => {
                  return <div key={dateplan.id}><ListItem primaryText={dateplan.name} /><Divider /></div>
                })}
              </List>
            </MobileTearSheet>
          </div>
        </div>
        <div className="chatSection">
          <div className="sectionTitle">Chat</div>
          <div className="chatWindow">
          </div>
        </div>
        <div className="currentChatsSection">
          <div className="sectionTitle">Current Chats</div>
          <div className="chatList">
            <MobileTearSheet>
              <List>
                <Subheader>Recent chats</Subheader>
                <ListItem
                  primaryText="Brendan Lim"
                  leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Eric Hoffman"
                  leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Grace Ng"
                  leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Kerem Suer"
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Raquel Parrado"
                  leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Brendan Lim"
                  leftAvatar={<Avatar src="images/ok-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Eric Hoffman"
                  leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Grace Ng"
                  leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Kerem Suer"
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                  primaryText="Raquel Parrado"
                  leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />}
                />
              </List>
            </MobileTearSheet>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;
