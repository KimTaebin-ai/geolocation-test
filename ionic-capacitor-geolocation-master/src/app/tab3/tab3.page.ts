import { Component, NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public lat: any;
  public lng: any;
  public alt: any;
  wait: any;
  constructor(public ngZone: NgZone) { }
  track() {
    this.wait = Geolocation.watchPosition({}, (position, err) => {
      this.ngZone.run(() => {
        console.log(position);
        
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.alt = position.coords.altitude;
      })
    })
  }
  stopTracking() {
    Geolocation.clearWatch({ id: this.wait });
  }
}
