import {Component, NgZone} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {NativeGeocoder, NativeGeocoderResult} from "@ionic-native/native-geocoder/ngx";
import {NativeGeocoderOptions} from "@ionic-native/native-geocoder";
import {
    BackgroundGeolocation,
    BackgroundGeolocationConfig,
    BackgroundGeolocationEvents, BackgroundGeolocationResponse
} from "@ionic-native/background-geolocation/ngx";


const {Geolocation, Toast} = Plugins;

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

    showingCurrent: boolean = true;
    address: string;

    constructor(public ngZone: NgZone,
                private nativeGeocoder: NativeGeocoder,
                private backgroundGeolocation: BackgroundGeolocation) {
    }

    ngOnInit() {
        this.backgroundGeolocation.start();

        this.track();

        const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true,
            stopOnTerminate: false
        };

      console.log('test');

        this.backgroundGeolocation.configure(config)
            .then(() => {
                this.backgroundGeolocation.on(BackgroundGeolocationEvents.location)
                    .subscribe((location: BackgroundGeolocationResponse) => {
                        console.log(location);

                        /*
                        * IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                        * and the background-task may be completed.  You must do this regardless if your operations are successful or not.
                        * IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                        * */

                        /*
                        * finish 메소드를 실행하여 네이티브 플러그인에 완료되었음을 알려줘야함.
                        * 백그라운드에서 너무 많은 작동을 한다고 다운 될 가능성이 있음.
                        * */

                        this.backgroundGeolocation.finish(); // FOR IOS ONLY
                    }, (error => {
                      console.log(error);
                    }))
            })
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
        if (this.address) {
            let options: NativeGeocoderOptions = {
                useLocale: true,
                maxResults: 1
            };

            this.nativeGeocoder.forwardGeocode(this.address, options)
                .then((result: NativeGeocoderResult[]) => {
                    this.ngZone.run(() => {
                        this.lat = parseFloat(result[0].latitude);
                        this.lng = parseFloat(result[0].longitude);
                    })
                    this.showingCurrent = false;
                })
                .catch((error: any) => console.error(error));
        } else {
            await Toast.show({
                text: '테스트'
            })
        }
    }

    track() {
        this.wait = Geolocation.watchPosition({}, (position, err) => {
            this.ngZone.run(() => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.alt = position.coords.altitude;
            })
        })

    }

    //
    // stopTracking() {
    //   Geolocation.clearWatch({ id: this.wait });
    //   this.alt = 0;
    //   this.lng = 0;
    //   this.lat = 0;
    // }
}
