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
import '../styles/datePlan.css';

class SingleDatePlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectable: false,
      showCheckBoxes: false
    };
  }

  render() {

    let outputActivities;
    console.log("here1");
    if (this.props.aDatePlan != 0) {
      console.log("here2");
      console.log(this.props.aDatePlan);
      let theTableRows = [];
      if(this.props.aDatePlan) {
        console.log("here3");
        theTableRows  = this.props.aDatePlan.map( item => {
        console.log("plan: ", this.props.aDatePlan.length);
          return (<TableRow key={item.id}>
            <TableRowColumn className="tableCellStyle">{item.name}</TableRowColumn>
            <TableRowColumn className="tableCellStyle">{item.description}</TableRowColumn>
          </TableRow>)
        });
      }
      outputActivities = (
        <Table
          fixedHeader={true}
          height="300px"
        >
          <TableHeader
            displaySelectAll={this.state.showCheckBoxes}
            adjustForCheckbox={this.state.showCheckBoxes}
          >
            <TableRow>
              <TableHeaderColumn className="tableCellStyle">Location</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle">Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckBoxes}
          >
            {theTableRows}
          </TableBody>
        </Table>
      )
    } else {
      outputActivities = <div className="selectPlan">Select a date plan to view activities</div>
    }

    return (
      <div>
        {outputActivities}
        {/*<Table
          fixedHeader={true}
          height="300px"
        >
          <TableHeader
            displaySelectAll={this.state.showCheckBoxes}
            adjustForCheckbox={this.state.showCheckBoxes}
          >
            <TableRow>
              <TableHeaderColumn className="tableCellStyle">Name</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckBoxes}
          >
            <TableRow>
              <TableRowColumn className="tableCellStyle">John Smith</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Randal White</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Stephanie Sanders</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Steve Brown</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Christopher Nolan</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Stephanie Sanders</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Steve Brown</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Christopher Nolan</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Stephanie Sanders</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Steve Brown</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn className="tableCellStyle">Christopher Nolan</TableRowColumn>
              <TableRowColumn className="tableCellStyle">Unemployed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>*/}
      </div>
    );

  }

}

export default SingleDatePlan;