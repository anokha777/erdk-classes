import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyErdkComponent } from './why-erdk.component';

describe('WhyErdkComponent', () => {
  let component: WhyErdkComponent;
  let fixture: ComponentFixture<WhyErdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyErdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyErdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
