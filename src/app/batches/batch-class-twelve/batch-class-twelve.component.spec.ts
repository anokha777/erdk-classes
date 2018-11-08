import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchClassTwelveComponent } from './batch-class-twelve.component';

describe('BatchClassTwelveComponent', () => {
  let component: BatchClassTwelveComponent;
  let fixture: ComponentFixture<BatchClassTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchClassTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchClassTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
