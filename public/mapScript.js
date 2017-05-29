      //Displaying Google Maps Window
      var map, infoWindow;

      //created placemarkers array to use in multiple functions to have control over the number of places that show on the map.
      var placeMarkers = [];
      //selected places from map can be stored into this empty array.
      var dateplans = [];

      var datePlanItems = [];

      var newPlace = {};

      var newInfoWindow;
      
      function initMap() {
        var styles = [
        {
          featureType: 'water',
          stylers: [
            { color: '#19a0d8'  }
          ]
        },{
          featureType: 'administrative',
          elementType: 'labels.text.stroke',
          stylers: [
            { color: '#ffffff'  },
            { weight: 6 }
          ]
        },{
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            { color: '#e85113'  }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            { color: '#efe9e4'  },
            { lightness: -40  }
          ]
        },{
          featureType: 'transit.station',
          stylers: [
            { weight: 9 },
            { hue: '#e85113'  }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'labels.icon',
          stylers: [
            { visibility: 'off' }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#efe9e4'},
            { lightness: -25  }
          ]
        }
          ];
            var uluru = {lat: 43.6532, lng: -79.3832};
            map = new google.maps.Map(document.getElementById('map'), {
              styles: styles,
              zoom: 12,
              center: uluru
              // mapTypeControl: false
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });

              //////////  Listeners   /////////

        //this autocomplete is for use in the geocoder entry box.
        // var zoomAutoComplete = new google.maps.places.Autocomplete(document.getElementById('zoom-to-area-text'));



        //searches and zooms in on a particular area in the city.
        // document.getElementById('zoom-to-area').addEventListener('click', function() {
        //   zoomToArea();
        // });

        //create a searchbox in order to execute a places searchbox
        var searchBox = new google.maps.places.SearchBox(
          document.getElementById('places-search'));
        //listen for the event fired when the user selects a prediction from the pickings list and gets more details for that place.
        searchBox.addListener('places_changed', function() {
          searchBoxPlaces(this);
        });

        // Bias the searchbox to within the bounds of the map.
        searchBox.setBounds(map.getBounds());

        //listen for the event fired when the user selects a prediction and clicks "go" more details for that place (not selecting a suggested search query).
        document.getElementById('go-places').addEventListener('click', textSearchPlaces);
        document.getElementById('places-search').addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          console.log("keypress");
          if (key === 13) {
          e.preventDefault();
          textSearchPlaces();
          }
        });



        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }


            ///////////   Functions   /////////////

      //This function takes the input value in the find nearby area text input locates it, and then zooms into that area. This is so that the user can see all POI, then decide to focus on one area of the map.
      function zoomToArea() {
        //initialize the geocoder.
        var geocoder = new google.maps.Geocoder();
        //get the address or place that the user entered.
        var address = document.getElementById('zoom-to-area-text').value;
        //make sure the address isn't blank.
        if (address == '') {
          window.alert('You must enter an area, or address.');
        } else {
          //geocode the address/are entered to get the center. Then, center the map on it and zoom in.
          geocoder.geocode(
            { address: address,
            // componentRestrictions: {locality: 'Canada'}
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              map.setCenter(results[0].geometry.location);
              map.setZoom(15);
            } else{
              window.alert('Sorry... We could not find that location - try entering a more specific place.');
            }
          });
        }
      }



        //this function will loop through the establishments and hide them all.
        function hideMarkers(markers) {
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
        }

        //this function fires when the user selects a searchbox picklist item. it will do a nearby search using the selected query string or place.
        function searchBoxPlaces(searchBox) {
          hideMarkers(placeMarkers);
          var places = searchBox.getPlaces();
        //for each place, get the icon, name and location.
        createMarkersForPlaces(places);
          if (places.length == 0) {
          window.alert('We did not find any places matching that search!');
          }
        }

        //this function fires when the user select "go" on the places search. it will do a nearby search using the entered query string or place.
        function textSearchPlaces() {
          var bounds = map.getBounds();
          //get the address or place that the user entered.
          var placesInput = document.getElementById('places-search').value;
          //make sure the address isn't blank.
          if (placesInput == '') {
            window.alert('You must enter POI, or address.');
          } else {
          hideMarkers(placeMarkers);
          var placesService = new google.maps.places.PlacesService(map);
          placesService.textSearch({
            query: document.getElementById('places-search').value,
            bounds: bounds
          }, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              createMarkersForPlaces(results);
            }
          });
        }
      }

          //this function creates markers for each place found in either places search.
          function createMarkersForPlaces(places) {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < places.length; i++) {
              var place = places[i];
              var icon = {
                url: place.icon,
                size: new google.maps.Size(35, 35),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(15, 34),
                scaledSize: new google.maps.Size(25, 25)
              };
              // create a marker for each place.
              var marker = new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
                id: place.place_id
              });
              //create a single infowindow to be used with the place details information so that only on one window is open at once.
              var placeInfoWindow = new google.maps.InfoWindow();
              //if a marker is clicked on, do a place details search on it in this function.
              marker.addListener('click', function() {
                if (placeInfoWindow.marker == this) {
                  console.log('This infowindow already is on this marker!');
                } else {
                  getPlacesDetails(this, placeInfoWindow);
                }
              });
              placeMarkers.push(marker);
              if (place.geometry.viewport) {
                //only geocodes have viewport.
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            }
            map.fitBounds(bounds);
          }


          //this function is the PLACES DETAILS search - its the most detailed so it's only executed when a marker is selected, indicating the user wants more details about that particular place.
          function getPlacesDetails(marker, infowindow) {
            var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: marker.id
            }, function(place, status) {
              newPlace = place;
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                //set the marker property on this infowindow so it isn't crreated again
                infowindow.marker = marker;
                var innerHTML = '<div>';
                if (place.name) {
                  innerHTML += '<strong>' + place.name + '</strong>';
                }
                if (place.formatted_address) {
                  innerHTML += '<br>' + place.formatted_address;
                }
                if (place.formatted_phone_number) {
                  innerHTML += '<br>' + place.formatted_phone_number;
                }

                // innerHTML += '<input type="hidden" name="place" value="'+ place +'">'
                // console.log(place)
                innerHTML += '<br><button id="add-location" className="infoWindowButton" type="button" onclick="addLocationToPlans(); closeInfoWindow(newInfoWindow);" data-id="4">Add to plans</button>';

                if (place.opening_hours) {
                  innerHTML += '<br><br><strong>Hours:</strong><br>' +
                    place.opening_hours.weekday_text[0] + '<br>' +
                    place.opening_hours.weekday_text[1] + '<br>' +
                    place.opening_hours.weekday_text[2] + '<br>' +
                    place.opening_hours.weekday_text[3] + '<br>' +
                    place.opening_hours.weekday_text[4] + '<br>' +
                    place.opening_hours.weekday_text[5] + '<br>' +
                    place.opening_hours.weekday_text[6];
                }
                if (place.photos) {
                  innerHTML += '<br><br><img src="' + place.photos[0].getUrl({maxHeight: 100, maxWidth: 200}) + '">';
                }
                innerHTML += '</div>';
                infowindow.setContent(innerHTML);
                infowindow.open(map, marker);
                newInfoWindow = infowindow;
                //make sure the marker property is cleared if the infowindow is closed.
                infowindow.addListener('closeclick' , function() {
                  infowindow.marker = null;
                });
              }
            });
          }

          window.onload = function () {
            //listen for the event fired when the user clicks "add me" button from the map and will push into the date plans array.
            var addLoc = document.getElementById('add-location');
            if (addLoc) {
              console.log(place)
              document.getElementById('add-location').addEventListener('click', function() {
                addLocationToPlans(Place);
              });
            }
          }


      //function to push a selected place into date plans array.
      function addLocationToPlans(event) {
        console.log("dateplanitems1: ", datePlanItems);
        datePlanItems.push(newPlace);
        console.log("dateplanitems1.5: ", datePlanItems);

        const tableRow = document.createElement("tr");
        tableRow.setAttribute("id", "testId");
        const cellName = document.createElement("td");
        const cellRemove = document.createElement("td");
        const removeButton = document.createElement("BUTTON");
        removeButton.onclick = function () {
          var buttonParent = this.parentNode;
          var cellParent = buttonParent.parentNode;
          var parent = document.getElementById("selectedItemsTableBody");
          parent.removeChild(cellParent);
          removeItemFromDatePlan(this.value);
          console.log("dateplanitems2: ", datePlanItems);
          
        };
        removeButton.setAttribute("class", "removeItemFromPlan");
        removeButton.innerHTML = "Remove";
        removeButton.value = newPlace.place_id;

        cellName.innerHTML = newPlace.name;
        cellRemove.appendChild(removeButton);

        // testData.innerHTML = "hello";
        tableRow.appendChild(cellName);
        tableRow.appendChild(cellRemove);

        document.getElementById('selectedItemsTableBody').appendChild(tableRow);
        
        // const row = document.createElement("TableRow");

        
        // console.log(itemRows);
        // document.body.appendChild(row);

        // document.getElementById('createDatePlanItemList').appendChild(testData);


        // let that = this;
        // let url = 'http://localhost:8080/api/items'

        // fetch(url.concat(planId))
        // .then(function(response) {
        //   if (response.status >= 400) {
        //     throw new Error("Bad response from server");
        //   }
        //   return response.json();
        // })
        // .then(function(data) {
        //   console.log(data);
        // });

      }

      function removeItemFromDatePlan(placeId) {
        console.log("dateplanitems3: ", datePlanItems)
        for (var i in datePlanItems) {
          if (datePlanItems[i].place_id === placeId)
            datePlanItems.splice(i, 1);
        }
      }

      function closeInfoWindow(newInfoWindow) {
        newInfoWindow.marker = null;
        newInfoWindow.close();
      }

      function buttonTest() {

        // console.log("hi dawg");
        // const row = document.createElement("TableRow");
        // const cell1 = document.createElement("TableRowColumn");
        // cell1.innerHTML = "Paragraph changed!";
        // row.appendChild(cell1);
        // console.log("row", row);
        // console.log("cell", cell1);

        // document.getElementById('createDatePlanTableBody').appendChild(row);
        // document.body.appendChild(row);

        var aPlace = {
          name: "Woooo Baby!"
        }

        const testRow = document.createElement("tr");
        testRow.setAttribute("id", "testId");
        const testCell1 = document.createElement("td");
        const testCell2 = document.createElement("td");
        const testButton = document.createElement("BUTTON");
        testButton.onclick = function () {
          var buttonParent = this.parentNode;
          var cellParent = buttonParent.parentNode;
          var parent = document.getElementById("selectedItemsTableBody");
          // var child = document.getElementById("testId");
          parent.removeChild(cellParent);
          
        };

        testCell1.innerHTML = aPlace.name;
        testCell2.appendChild(testButton);

        // testData.innerHTML = "hello";
        testRow.appendChild(testCell1);
        testRow.appendChild(testCell2);

        document.getElementById('selectedItemsTableBody').appendChild(testRow);
      }

      function dataTest() {
        let arr1 = [
          {
            id: 1,
            str: "hello"
          },
          {
            id: 2,
            str: "hello2"
          }
        ]
        return arr1;
      }

      function clearDatePlanItems() {
        console.log("allDatePlanItems", datePlanItems);
        datePlanItems = [];
        console.log("allDatePlanItems", datePlanItems);
      }

      function alertValidation() {
        alert("Please enter a Date Plan name, description, and at least one activity to create a plan.");
      }
