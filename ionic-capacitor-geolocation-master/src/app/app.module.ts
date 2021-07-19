import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {AgmCoreModule} from '@agm/core';
import {BackgroundGeolocation} from "@ionic-native/background-geolocation/ngx";
import {Network} from '@ionic-native/network/ngx';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBZDoebTcNnQ_-NsAyDVGVhFtXT64vd0oM',
            libraries: ['places']
        }),
        IonicModule.forRoot(),
        AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        NativeGeocoder,
        BackgroundGeolocation,
        Network,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
