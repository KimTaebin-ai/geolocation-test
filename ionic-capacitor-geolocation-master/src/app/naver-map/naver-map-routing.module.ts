import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaverMapPage } from './naver-map.page';

const routes: Routes = [
  {
    path: '',
    component: NaverMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaverMapPageRoutingModule {}
