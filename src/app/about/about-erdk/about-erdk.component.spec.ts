import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutErdkComponent } from './about-erdk.component';

describe('AboutErdkComponent', () => {
  let component: AboutErdkComponent;
  let fixture: ComponentFixture<AboutErdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutErdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutErdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
