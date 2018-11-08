import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCompetitionComponent } from './batch-competition.component';

describe('BatchCompetitionComponent', () => {
  let component: BatchCompetitionComponent;
  let fixture: ComponentFixture<BatchCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
