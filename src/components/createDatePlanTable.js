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
import '../styles/createDatePlan.css';


class CreateDatePlanTable extends Component {

  constructor(props) {
    super(props)

    var createDatePlanTable = {};
  }

  render() {

    if (this.props.createDatePlanItems !== 0) {
      let tableRows = [];
      if(this.props.createDatePlanItems) {
        tableRows = this.props.createDatePlanItems.map( item => {
          return (<TableRow key={item.id}>
            <TableRowColumn className="tableCellStyle">{item.id}</TableRowColumn>
            <TableRowColumn className="tableCellStyle">{item.str}</TableRowColumn>
          </TableRow>)
        });
      }

      this.createDatePlanTable = (
        <Table
          fixedHeader={true}
          className="createDatePlanTable"
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn className="tableCellStyle">Plan Name</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle">Description</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle"></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            id="createDatePlanTableBody"
          >
            {tableRows}
          </TableBody>
        </Table>
      )
      return (
        <div>
          {this.createDatePlanTable}
        </div>
      )
    }
  }
}

export default CreateDatePlanTable;