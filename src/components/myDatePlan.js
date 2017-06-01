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



class MyDatePlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectable: false,
      showCheckBoxes: false,
      value: 0,
      aSingleDatePlan: [],
      datePlans: []
    }
    this.getAllDatePlanItemsReact = this.getAllDatePlanItemsReact.bind(this);
  }



  handleChange = (event, index, value) => {
    this.setState({value});
    // update date plan table with selections from category choice
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

  loadDatePlanActivities = (aPlan) => {

    for (var i in this.state.datePlans) {
      if (this.state.datePlans[i].id === aPlan) {
        this.setState({aSingleDatePlan: this.state.datePlans[i]});
      }
    }
  }

  getAllDatePlansForUserReact() {
    let ten = 10;
    let id = ten.toString();
    let that = this;
    let url = 'http://localhost:8080/api/plans/plan_user/'

    fetch(url.concat(id))
  // getAllDatePlansForUserReact(userId) {
  //   let id = userId.toString();
  //   let that = this;
  //   let url = 'http://localhost:8080/api/plans/plan_user/'

  // fetch(url.concat(id))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ datePlans: data });
    });
  }

  getAllDatePlanItemsReact(planId) {
    let that = this;
    let url = 'http://localhost:8080/api/plans/plan_item/'

    fetch(url.concat(planId))
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((data) => {
      this.setState({aSingleDatePlan: data});
    });
  }

  removeDatePlanReact(planId) {
    let that = this;
    let url = 'http://localhost:8080/api/plans/plan_item/'

    fetch(url.concat(planId))
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((data) => {
      this.setState({aSingleDatePlan: data});
    });
  }

  componentDidMount() {

    this.getAllDatePlansForUserReact();

    const script1 = document.createElement("script");
    script1.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGYsWqSR5oPB0HPL_gjWW8DpwZSAXnf30&libraries=places&callback=initMap";
    script1.name = "googleMaps";
    script1.async = true;
    document.body.appendChild(script1);

}

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
            <TableRowColumn className="tableCellButtonStyle"><RaisedButton label="View" primary={true} key={item.id} onClick={this.getAllDatePlanItemsReact.bind(null, item.id)}/></TableRowColumn>
            <TableRowColumn className="tableCellButtonStyle"><RaisedButton label="Remove" primary={true} key={item.id} onClick={this.removeDatePlanReact.bind(null, item.id)}/></TableRowColumn>
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
              <TableHeaderColumn className="tableCellStyle">Plan Name</TableHeaderColumn>
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
        <div className="pageTitle">My Date Plans</div>
        <div className="datePlanMainSection">
          {/*<div className="datePlanDropDown">
            {dropDownPlanList}
          </div>*/}
          <div className="sectionTitle">My Date Plans</div>
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
            <div id="map"></div>
              <div className="options-box options-box-none">
                <div>
                  <input id="zoom-to-area-text" type="text" placeholder="Enter Where To Go!"/>
                  <input id="zoom-to-area" type="button" value="Zoom"/>
                </div>
                <div>
                  <span className="text">Search for nearby places</span>
                  <input id="places-search" type="text" placeholder="Ex. Bars in the TO"/>
                  <input id="go-places" type="button" value="Go"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyDatePlan;
