
export default class NativeGPS {
  constructor(config){
    this.config = config;
  }

  get(lat, lng, cb){
    return this.getAddress(lat, lng)
  } 

  getCurrentLocation(cb){
    if(navigator.geolocation) {
      this.cb = cb;
      navigator.geolocation.getCurrentPosition(this.success.bind(this));
    } else {
      console.error('Your browser doesn\'t support the geolocation api.')
    }

  }

  success(position){
    this.getAddress(position.coords.latitude, position.coords.longitude)
  }

  getAddress(myLatitude,myLongitude) {
    
    var geocoder	= new google.maps.Geocoder();							// create a geocoder object
    var location	= new google.maps.LatLng(myLatitude, myLongitude);		// turn coordinates into an object
 			
    return new Promise((fulfilled, rejected) => {

      geocoder.geocode({'latLng': location}, (results, status) => {
        if(status != google.maps.GeocoderStatus.OK/*  */) {						// if geocode success
          return rejected("Geocode failure: " + status);								// alert any other error(s)
        }
        fulfilled(results[0])
      });
    })
  }
}