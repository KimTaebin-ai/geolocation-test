import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KakaoMapPage } from './kakao-map.page';

describe('KakaoMapPage', () => {
  let component: KakaoMapPage;
  let fixture: ComponentFixture<KakaoMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakaoMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KakaoMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
