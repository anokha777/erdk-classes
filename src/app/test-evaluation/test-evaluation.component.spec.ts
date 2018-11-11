import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEvaluationComponent } from './test-evaluation.component';

describe('TestEvaluationComponent', () => {
  let component: TestEvaluationComponent;
  let fixture: ComponentFixture<TestEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
