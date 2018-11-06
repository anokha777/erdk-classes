import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessInfoBannerComponent } from './success-info-banner.component';

describe('SuccessInfoBannerComponent', () => {
  let component: SuccessInfoBannerComponent;
  let fixture: ComponentFixture<SuccessInfoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessInfoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
