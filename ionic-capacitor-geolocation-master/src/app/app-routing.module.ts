import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'kakao-map',
    loadChildren: () => import('./kakao-map/kakao-map.module').then( m => m.KakaoMapPageModule)
  },
  {
    path: 'naver-map',
    loadChildren: () => import('./naver-map/naver-map.module').then( m => m.NaverMapPageModule)
  },
  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then( m => m.WifiPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
