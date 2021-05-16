import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaverMapPageRoutingModule } from './naver-map-routing.module';

import { NaverMapPage } from './naver-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaverMapPageRoutingModule
  ],
  declarations: [NaverMapPage]
})
export class NaverMapPageModule {}
