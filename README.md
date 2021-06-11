# ionic-map-simple
this uses google maps JavaScript API

this is sort of a subproject of silk road fashion project. 
this took a lot of time because i tried ionic native maps first. 
that was a disaster cause when i discovered that it had no google directions api support, it was too late. 
angular maps one was also a bad choice because i can't change all the dependencies to suit AGM.
this was the obvios choice according to many(on the internet).

But that wasn't easy either with typescript.
it litterelly took me days to go this far.
that's why i'm pushing this.
Cause however easy it turned out be, I can't go through the discoery again.

typescript workaround for 'google' namespace error
  npm i -D @types/google.maps --save
  and adding this to the particular file
    /// <reference types="google.maps" />

map element error workaround
   @ViewChild('map',{static: true}) mapElement: ElementRef;

