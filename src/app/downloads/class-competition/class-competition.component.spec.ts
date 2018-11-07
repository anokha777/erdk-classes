import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCompetitionComponent } from './class-competition.component';

describe('ClassCompetitionComponent', () => {
  let component: ClassCompetitionComponent;
  let fixture: ComponentFixture<ClassCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
