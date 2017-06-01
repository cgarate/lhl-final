import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import '../styles/profile.css';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField'; 
import ImageUpload from './imageUploader.js';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';


class MatchProfileForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  getAllMessages = () => {


    const formData = {
      matchId: this.props.userInfo.id, 
      userId: Auth.getUserID()
    };

    const jsonObj = JSON.stringify(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:8080/api/users/messages/');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        //xhr.response;
        console.log("now: ", xhr.response);
      }
    })
    xhr.send(jsonObj);
  }

  render() {

    var imageURL = "http://localhost:8080/public/img/basketball.jpg"
    var theMessages = this.getAllMessages();
    console.log("theMessages: ", theMessages);

    return (
      <div>
        <div className="marginTop20">
            <Table className="profileTable" selectable={false}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
              >
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
              >
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileImage">Profile Image:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <img src={imageURL} height="250" width="250"/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileUsername">Username:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileUsername" name="username" value={this.props.userInfo.username} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileBio">Bio:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileBio" name="bio" value={this.props.userInfo.bio} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
        </div>
      </div>
    );
  }
}

export default MatchProfileForm;
