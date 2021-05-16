import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaverMapPage } from './naver-map.page';

describe('NaverMapPage', () => {
  let component: NaverMapPage;
  let fixture: ComponentFixture<NaverMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaverMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaverMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
