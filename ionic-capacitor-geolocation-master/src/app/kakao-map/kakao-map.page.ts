import { Component, NgZone, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation, Toast } = Plugins;
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var kakao;

@Component({
  selector: 'app-kakao-map',
  templateUrl: './kakao-map.page.html',
  styleUrls: ['./kakao-map.page.scss'],
})
export class KakaoMapPage implements OnInit {
  public lat: any;
  public lng: any;
  showingCurrent: boolean = true;
  address: string;
  map: any;
  infowindow: any;

  constructor(
    private nativeGeocoder: NativeGeocoder, private ngZone: NgZone
  ) { }

  ngOnInit() {
    // 살짝 딜레이 줘야 화면에 맵에 쪽바로 그려진다.
    setTimeout(() => {
      const options = {
        center: new kakao.maps.LatLng(this.lat, this.lng),
        level: 8
      };

      this.map = new kakao.maps.Map(document.getElementById('map'), options);

      // 마커가 표시될 위치입니다 
      const markerPosition = new kakao.maps.LatLng(this.lat, this.lng);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });

      marker.setMap(this.map);

    }, 300);

    this.setCurrentPosition();
  }
  
  async setCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.ngZone.run(() => {
      this.lat = coordinates.coords.latitude;
      this.lng = coordinates.coords.longitude;
    })
    this.showingCurrent = true;
  }

  async geocode() {
    if (this.address != "") {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(this.address, options)
        .then((result: NativeGeocoderResult[]) => {
          this.ngZone.run(() => {
            this.lat = parseFloat(result[0].latitude);
            this.lng = parseFloat(result[0].longitude);
            // this.myMap.triggerResize()
            //   .then(() => (this.myMap as any)._mapsWrapper.setCenter({ lat: this.lat, lng: this.lng }));
          })
          this.showingCurrent = false;
        })
        .catch((error: any) => console.log(error));
    }
    else {
      await Toast.show({
        text: 'Please add address to Geocode'
      });
    }
  }

}
