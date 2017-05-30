import React, { Component } from 'react';

import '../styles/createDatePlan.css';
import Auth from '../modules/Auth';
// import '../styles/materialize.css';

class CreateDatePlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datePlanItems: []
    }

    this.saveDatePlan = this.saveDatePlan.bind(this);
    this.clearDatePlan = this.clearDatePlan.bind(this);

    //var createDatePlanTable = {};
  }

  testtest = () => {
    var test = window.dataTest();
    console.log("TESTTESTTEST: ", test);
    // this.state.datePlanItems = test;
    this.setState({datePlanItems: test});

  }

  saveDatePlan = () => {
    let datePlanName = document.getElementById('createDatePlanName');
    let datePlanDesc = document.getElementById('createDatePlanDesc');
    let datePlanItems = window.getAllPlanItems();
    if (datePlanName.value === "" || datePlanDesc.value === "") {
      window.alertValidation();
      return;
    }

    let sanitizedItems = datePlanItems.map( item => {
      let itemObj = {}

      if (item.name) {
        itemObj.name = item.name;
      }

      if (item.formatted_phone_number) {
        itemObj.phone = item.formatted_phone_number;
      }

      if(item.formatted_address) {
        itemObj.street_address = item.formatted_address;
      }

      if(item.url) {
        itemObj.website = item.url;
      }
      
      return itemObj;
    });

    // const name = encodeURIComponent(datePlanName.value);
    // const description = encodeURIComponent(datePlanDesc.value);
    // const owner_id = encodeURIComponent(Auth.getUserID());
    const formData = {
      plans: {
        name: datePlanName.value,
        description: datePlanDesc.value
      },
      items: sanitizedItems
    };
    // formData.items = [];
    // formData.plans = {};
    // formData.items = window.getAllPlanItems();
    // formData.plans.name = datePlanName;
    // formData.plans.description = datePlanDesc;
    formData.plans.owner_id = Auth.getUserID();
    formData.plans.tod = "evening";
    console.log("formData", formData);
    
    const jsonObj = JSON.stringify(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8080/api/plans/plan_items/');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        //xhr.response;
        console.log("now: ", xhr.response);
      }
    })
    xhr.send(jsonObj);

    datePlanName.value = "";
    datePlanDesc.value = "";
    var tBodyItems = document.getElementById("selectedItemsTableBody");
    tBodyItems.innerHTML = '';
    window.clearDatePlanItems();
    console.log("name: ", datePlanName.value);
    console.log("desc: ", datePlanDesc.value);

  }

  clearDatePlan = () => {
    let datePlanName = document.getElementById('createDatePlanName');
    let datePlanDesc = document.getElementById('createDatePlanDesc');
    datePlanName.value = "";
    datePlanDesc.value = "";
    var tBodyItems = document.getElementById("selectedItemsTableBody");
    tBodyItems.innerHTML = '';
    window.clearDatePlanItems();
  }

  componentDidMount() {

      console.log("herehere1");
      const script1 = document.createElement("script");
      script1.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZCefKR0I6QU-tmqcxQ43O53Y_zFGRy3s&libraries=places&callback=initMap";
      script1.name = "googleMaps";
      script1.async = true;
      document.body.appendChild(script1);
  }

  render() {


    return (
      <div className="createDatePlanMain">
        <div className="pageTitle">Create Date Plan</div>
        {/*<input type="submit" className="createFormButton" onClick={window.buttonTest.bind(null)}/>*/}
        {/*<input type="submit" value="Create Plan" className="createFormButton" onClick={this.saveDatePlan.bind(null)}/>*/}
        <div className="planItemsCreateForm">
          <input type="submit" value="Clear" className="createFormButton" onClick={this.clearDatePlan.bind(null)}/>
          <input type="submit" value="Create" className="createFormButton" onClick={this.saveDatePlan.bind(null)}/>
          <div className="sectionTitle">Create Date Plan</div>
          <div className="createDatePlanForm">
            {/*<form action="" method="POST">*/}
              <label htmlFor="createDatePlanName" className="createDatePlanNameLabel">Enter Date Plan Name</label>
              <input id="createDatePlanName" type="text" className="createFormNameInput"/>
              <br/>
              <label htmlFor="createDatePlanDesc" className="createDatePlanNameLabel">Enter Date Plan Description</label>
              <input id="createDatePlanDesc" type="text" className="createFormNameInput"/>
              <br/>
              <div>Date Plan Activities</div>
              <div id="createDatePlanItemList">
                {/*<CreateDatePlanTable createDatePlanItems={this.state.datePlanItems}/>*/}
                <table id="userSelectedItems" className="userSelectedItems">
                  <tbody id="selectedItemsTableBody">
                  </tbody>
                </table>
              </div>
              <div className="createDatePlanMapSection">
                <div className="sectionTitle">Find a Location</div>
                <div className="datePlanMap">
                  <div>
                    <div className="options-box-create">
                      <div className="createDatePlanMapSearch">
                        <label htmlFor="places-search" className="places-searchLabel">Search for nearby places</label>
                        <br/>
                        {/*<label htmlFor="createDatePlanName" className="createDatePlanNameLabel">Enter Date Plan Name</label>
                        <input id="createDatePlanName" type="text" className="createFormNameInput"/>*/}
                        <input id="places-search" className="places-search" type="text" placeholder="Ex. Bars in the TO"/>
                        <input id="go-places" className="go-places" type="button" value="Search"/>
                      </div>
                    </div>
                    <div id="map"></div>
                  </div>
                </div>
              </div>
              {/*<input type="submit" className="createFormButton" onClick={this.saveDatePlan}/>*/}
            {/*</form>*/}
          </div>
          <div>
            {/*<MapView/>*/}
          </div>
        </div>

      </div>

    );
  }
}

export default CreateDatePlan;
