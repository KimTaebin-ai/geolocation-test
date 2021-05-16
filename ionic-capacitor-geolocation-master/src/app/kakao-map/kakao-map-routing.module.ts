import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KakaoMapPage } from './kakao-map.page';

const routes: Routes = [
  {
    path: '',
    component: KakaoMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KakaoMapPageRoutingModule {}
