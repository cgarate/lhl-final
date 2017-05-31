import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/datePlan.css';

class SingleDatePlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectable: false,
      showCheckBoxes: false
    };

    // this.locatePlace = this.props.locatePlace.bind(this);
  }

  handleLocation = (item) => {
    this.props.locatePlace(item);
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
            <TableRowColumn className="tableCellButtonStyle"><RaisedButton label="Locate" primary={true} key={item.id} onClick={this.props.locatePlace.bind(null, item)}/></TableRowColumn>
          </TableRow>)
        });
      }
      outputActivities = (
        <Table
          fixedHeader={true}
          height="241px"
        >
          <TableHeader
            displaySelectAll={this.state.showCheckBoxes}
            adjustForCheckbox={this.state.showCheckBoxes}
          >
            <TableRow>
              <TableHeaderColumn className="tableCellStyle">Location</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle">Description</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle"></TableHeaderColumn>
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
