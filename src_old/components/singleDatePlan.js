import React, { Component } from 'react';

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
    if (this.props.aDatePlan !== 0) {
      let theTableRows = [];
      if(this.props.aDatePlan) {
        theTableRows  = this.props.aDatePlan.map( item => {
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
      </div>
    );

  }

}

export default SingleDatePlan;
