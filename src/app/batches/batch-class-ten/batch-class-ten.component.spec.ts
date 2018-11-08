import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchClassTenComponent } from './batch-class-ten.component';

describe('BatchClassTenComponent', () => {
  let component: BatchClassTenComponent;
  let fixture: ComponentFixture<BatchClassTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchClassTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchClassTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
