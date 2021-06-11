/// <reference types="google.maps" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map',{static: true}) mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  map: any;
  latLng:any;   //home
  latLng2:any;  //aiya home
  latLng3:any;  //udubaddawa post office
  latLng4:any;  //Welipennagahamulla po
  latLng5:any;  //Bibiladeniya po
  travlm = google.maps.TravelMode.DRIVING;
  //udupost = "place_id:ChIJ--ycEGPa4joRBh4OvANtgF0";
  res:any;

  constructor() {}

  ngOnInit(){
   this.initMap();
  }

  initMap() {
   this.latLng =  new google.maps.LatLng(7.453048,79.951090);
   this.latLng2 =  new google.maps.LatLng(7.476186,79.965709);
   this.latLng3 =  new google.maps.LatLng(7.483890,79.967580);
   this.latLng4 =  new google.maps.LatLng(7.430900,79.929349);
   this.latLng5 =  new google.maps.LatLng(7.452379,79.948656);



   let mapOptions ={
     center : this.latLng,
     zoom: 15,
     mapTypeId : google.maps.MapTypeId.ROADMAP
   };

   this.map = new google.maps.Map(this.mapElement.nativeElement ,mapOptions);
   this.addMarker(this.map);
   this.directionsDisplay.setMap(this.map);
  }

  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: this.latLng2 //map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
    this.addMarkerClickListener(marker);
    }

  addMarkerClickListener(marker: google.maps.Marker) {
    google.maps.event.addListener(marker, 'click', () => {
        this.getDirections();
      });
  }

    addInfoWindow(marker, content){

      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
    }

  getDirections(){
    this.directionsService.route({
      origin:this.latLng,
      destination:this.latLng2,
      travelMode:this.travlm
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  addmaclus(){
    const locations = [
      { lat: -31.56391, lng: 147.154312 },
      { lat: -33.718234, lng: 150.363181 },
      { lat: -33.727111, lng: 150.371124 },
      { lat: -33.848588, lng: 151.209834 },
      { lat: -33.851702, lng: 151.216968 },
      { lat: -34.671264, lng: 150.863657 },
      { lat: -35.304724, lng: 148.662905 },
      { lat: -36.817685, lng: 175.699196 },
      { lat: -36.828611, lng: 175.790222 },
      { lat: -37.75, lng: 145.116667 },
      { lat: -37.759859, lng: 145.128708 },
      { lat: -37.765015, lng: 145.133858 },
      { lat: -37.770104, lng: 145.143299 },
      { lat: -37.7737, lng: 145.145187 },
      { lat: -37.774785, lng: 145.137978 },
      { lat: -37.819616, lng: 144.968119 },
      { lat: -38.330766, lng: 144.695692 },
      { lat: -39.927193, lng: 175.053218 },
      { lat: -41.330162, lng: 174.865694 },
      { lat: -42.734358, lng: 147.439506 },
      { lat: -42.734358, lng: 147.501315 },
      { lat: -42.735258, lng: 147.438 },
      { lat: -43.999792, lng: 170.463352 },
    ];
    // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  // @ts-ignore MarkerClusterer defined via script
  new MarkerClusterer(this.map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  }

}
