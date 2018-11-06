import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWithImageComponent } from './info-with-image.component';

describe('InfoWithImageComponent', () => {
  let component: InfoWithImageComponent;
  let fixture: ComponentFixture<InfoWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
