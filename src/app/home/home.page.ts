/// <reference types="google.maps" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map',{static: true}) mapElement: ElementRef;
  map: any;

  constructor() {}

  ngOnInit(){
   this.initMap();
  }

  initMap() {
   let latLng =  new google.maps.LatLng(7.453048,79.951090);

   let mapOptions ={
     center : latLng,
     zoom: 15,
     mapTypeId : google.maps.MapTypeId.ROADMAP
   };

   this.map = new google.maps.Map(this.mapElement.nativeElement ,mapOptions);
  }
}
