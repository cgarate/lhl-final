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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/datePlan.css';
import SingleDatePlan from './singleDatePlan.js';



class DatePlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectable: false,
      showCheckBoxes: false,
      value: 0,
      aSingleDatePlan: {},
      datePlans: [
        {
          id: 1,
          name: "The Park",
          description: "A beautiful walk in the park and a picnic.",
          planItems: [
            {
              description: "A walk through the park",
              itemDetails: {
                id: 1,
                name: "Freedom Park",
                street: "123 Park St",
                phone: "",
                hours: "8:00am to 20:00pm",
                category: "Outdoors"
              }
            },
            {
              description: "A picnic under a tree",
              itemDetails: {
                id: 2,
                name: "Freedom Park",
                street: "123 Park St",
                phone: "",
                hours: "8:00am to 20:00pm",
                category: "Food"
              }
            }
          ]
        },
        {
          id: 2,
          name: "The Bar",
          description: "Time for a drink!",
          planItems: [
            {
              description: "Heavy Drinking",
              itemDetails: {
                id: 3,
                name: "Dive Bar",
                street: "124 Bar St",
                phone: "",
                hours: "8:00am to 2:00am",
                category: "Bar"
              }
            }
          ]
        }
      ]
    };
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    // update date plan table with selections from category choice
  }

  loadDatePlanActivities = (aPlan) => {

    for (var i in this.state.datePlans) {
      if (this.state.datePlans[i].id === aPlan) {
        this.setState({aSingleDatePlan: this.state.datePlans[i]});
      }
    }
  }

  // loadDatePlanCategory = (category) => {
  //   let selectedCategory = [];
  //   for (var i in this.state.datePlans) {
  //     for (var j in this.state.datePlans[i].planItems) {
  //       if (this.state.datePlans[i].planItems[j].itemDetails.category === category)
  //         selectedCategory.push(this.state.datePlans[i]);
  //     }
  //   }
  //   this.setState({datePlans: selectedCategory});
  // }

  render() {

    let myPaddingStyle = {
      paddingTop: 10,
      paddingBottom: 10,
      padding: 100
    }

    let outputDatePlans;
    if (this.state.datePlans != 0) {
      let theTableRows = [];
      if(this.state.datePlans) {
        theTableRows  = this.state.datePlans.map( item => {
        console.log("plan: ", this.state.datePlans.length);
          return (<TableRow key={item.id}>
            <TableRowColumn className="tableCellStyle">{item.name}</TableRowColumn>
            <TableRowColumn className="tableCellStyle">{item.description}</TableRowColumn>
            <TableRowColumn className="tableCellButtonStyle"><RaisedButton label="View Plan" primary={true} key={item.id} onClick={this.loadDatePlanActivities.bind(null, item.id)}/></TableRowColumn>
            <TableRowColumn className="tableCellButtonStyle"><RaisedButton label="Save Plan" primary={true} key={item.id} onClick={this.loadDatePlanActivities.bind(null, item.id)}/></TableRowColumn>
          </TableRow>)
        });
      }
      outputDatePlans = (
        <Table
          fixedHeader={true}
          height="200px"
        >
          <TableHeader
            displaySelectAll={this.state.showCheckBoxes}
            adjustForCheckbox={this.state.showCheckBoxes}
          >
            <TableRow>
              <TableHeaderColumn className="tableCellStyle">Name</TableHeaderColumn>
              <TableHeaderColumn className="tableCellStyle">Status</TableHeaderColumn>
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
      outputDatePlans = <div className="selectPlan">No date plans have been created! Create one now to find a date!</div>
    }

    /*let dropDownPlanList;
    if (this.state.datePlans != 0) {
      let theMenuItems = [];
      let counter = 0;
        if(this.state.datePlans) {
          this.state.datePlans.forEach( item => {
            item.planItems.forEach( singlePlanItem => {
              counter++;
              theMenuItems.push(<MenuItem value={counter} 
                key={counter}
                label={singlePlanItem.itemDetails.category} 
                primaryText={singlePlanItem.itemDetails.category} 
                onClick={this.loadDatePlanCategory.bind(null, singlePlanItem.itemDetails.category)}
                onTouchTap={this.props.onTouchTap}/>
              )
            })
          });
        }
        dropDownPlanList = (
          <DropDownMenu maxHeight={200} value={this.state.value} onChange={this.handleChange}>
            {theMenuItems}
          </DropDownMenu>
        )
    }*/
    
    return (
      <div className="datePlanMain">
        <div className="pageTitle">Date Plans</div>
        <div className="datePlanMainSection">
          {/*<div className="datePlanDropDown">
            {dropDownPlanList}
          </div>*/}
          <div className="sectionTitle">Date Plans</div>
          <div className="datePlanList">
           {outputDatePlans}
          </div>
        </div>
        <div className="datePlanActivitiesSection">
          <div className="sectionTitle">Date Plan Activities</div>
          <div className="datePlanList">
            <SingleDatePlan aDatePlan={this.state.aSingleDatePlan}/>
          </div>
        </div>
        <div className="datePlanMapSection">
          <div className="sectionTitle">Map</div>
          <div className="datePlanMap">
          </div>
        </div>
        
      </div>
    );
  }
}

export default DatePlan;