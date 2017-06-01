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
import MobileTearSheet from '../containers/MobileTearSheet';
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
      dateplans: [],
      events: [],
      mydateplans: [],
      myevents: []
    };
  };

  getMyDatePlans() {
    let url = "http://localhost:8080/api/plans/plan_user/"
    url = url.concat(Auth.getUserID())
    fetch(url)
    .then( (response) => {
      if (response.status !== 200) {
        throw new Error("Error code: ", response.status);
      }
      return response.json()
      .then( (result) => {
        let mydateplans = this.state.mydateplans;
        mydateplans = result;
        this.setState({mydateplans: mydateplans});
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
    let url = "http://localhost:8080/api/users/user_plan/"
    url = url.concat(Auth.getUserID())
    fetch(url)
    .then( (response) => {
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Error code: ", response.status);
      }

      return response.json()
      .then( (result) => {
        let dateplans = this.state.dateplans;
        dateplans = result;
        this.setState({dateplans: dateplans});
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

  getEvents() {
    let url = "http://localhost:8080/api/events/event_user/"
    url = url.concat(Auth.getUserID())
    fetch(url)
    .then( (response) => {
      if (response.status !== 200) {
        throw new Error("Error code: ", response.status);
      }
      return response.json()
      .then( (result) => {
        let myevents = this.state.myevents;
        myevents = result;
        this.setState({myevents: myevents});

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
    this.getMyDatePlans();
    Auth.getUserID();
    Auth.getUserName();
    this.getEvents();
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
                displayRowCheckbox={this.state.showCheckBoxes}>

              {this.state.myevents.map( (event) => {
                return <TableRow>
                  <TableRowColumn className="tableCellStyle">{event.eventName}</TableRowColumn>
                  <TableRowColumn className="tableCellStyle">{event.name}</TableRowColumn>
                  <TableRowColumn className="tableCellStyle">{event.date}</TableRowColumn>
                </TableRow>
              })}


              </TableBody>
            </Table>

          </div>
        </div>

        {/* Date Plans owned by user */}
        <div className="datePlanSection">
          <div className="sectionTitle">My Date Plans</div>
          <div className="datePlanList">
            <MobileTearSheet>
              <List>
                {this.state.mydateplans.map( (mydateplan) => {
                  return <div key={mydateplan.id}><ListItem primaryText={mydateplan.name} /><Divider /></div>
                })}
              </List>

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
              </List>
            </MobileTearSheet>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;
