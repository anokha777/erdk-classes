import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchClassElevenComponent } from './batch-class-eleven.component';

describe('BatchClassElevenComponent', () => {
  let component: BatchClassElevenComponent;
  let fixture: ComponentFixture<BatchClassElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchClassElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchClassElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
