import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KakaoMapPageRoutingModule } from './kakao-map-routing.module';

import { KakaoMapPage } from './kakao-map.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    KakaoMapPageRoutingModule
  ],
  declarations: [KakaoMapPage]
})
export class KakaoMapPageModule {}
