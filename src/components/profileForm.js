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



class ProfileForm extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.saveUser = this.props.saveUser.bind(this);
    this.onChange = this.props.onChange.bind(this);
    this.saveURL = this.saveURL.bind(this);
    this.saveImage = this.saveURL.bind(this);
  }

  saveURL = () => {
    var newImageURL = document.getElementById("newImage").value;
    console.log("WHAT AM I:", newImageURL);
    // if (newImageURL) {
    //   var ret = newImageURL.replace("C:\\fakepath\\", "");
    //   this.props.saveImage(ret);
    // }
    
  }

  render() {

    // const birthday = new Date(this.props.userInfo.dob).toDateString();
    // console.log(birthday);
    // let birthday = new Date(this.props.userInfo.dob);
    let birthday = new Date();

    var imageURL = "http://localhost:8080/public/img/basketball.jpg"


    return (
      <div>
        <div className="marginTop20">
          {/*<form action="http://localhost:8080/api/users/update/?_method=PUT" method="POST">*/}
            <Table className="profileTable" selectable={false}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
              >
                {/*<TableRow>
                  <TableHeaderColumn className="tableCellStyle tableCellHeaderStyle"></TableHeaderColumn>
                  <TableHeaderColumn className="tableCellStyle tableCellHeaderStyle"></TableHeaderColumn>
                </TableRow>*/}
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
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <form className="profileForm" method="post" encType="multipart/form-data" action="http://localhost:8080/upload">
                      <input id="newImage" className="imageUploadButtons" type="file" name="imageFile" size="40" onChange={this.saveURL.bind(this)}/>
                      <input type="submit" className="imageUploadButtons" value="Upload" />
                    </form>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileFirstName">First Name:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileFirstName" name="first_name" value={this.props.userInfo.first_name} onChange={this.props.onChange}/>
                    <input type="hidden" id="profileId" name="id" value={this.props.userInfo.id}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileLastName">Last Name:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileLastName" name="last_name" value={this.props.userInfo.last_name} onChange={this.props.onChange}/>
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
                    <label htmlFor="profileEmail">Email:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileEmail" name="email" value={this.props.userInfo.email} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                {/*<TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileBirthdate">Birthdate:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <div>
                      <DatePicker hintText="Select Date" mode="landscape" defaultDate={birthday} onChange={this.props.onChange}/>
                    </div>
                  </TableRowColumn>
                </TableRow>*/}
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileBio">Bio:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileBio" name="bio" value={this.props.userInfo.bio} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    {/*<input type="submit" value="Update" className="profileSubmitButton" onClick={this.props.saveUser}/>*/}
                    <RaisedButton label="Update" labelColor="#ffffff" backgroundColor="#2081C3" onClick={this.props.saveUser}/>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          {/*</form>*/}
          {/*<form method="post" encType="multipart/form-data" action="http://localhost:8080/upload">
            <input id="newImage" type="file" name="imageFile" size="40" onChange={this.saveURL.bind(this)}/>
            <input type="submit" value="Upload" />
          </form>*/}
          {/*<ImageUpload />*/}
        </div>
      </div>
    );
  }
}

export default ProfileForm;
