import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVissionComponent } from './our-vission.component';

describe('OurVissionComponent', () => {
  let component: OurVissionComponent;
  let fixture: ComponentFixture<OurVissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurVissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
