import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassElevenComponent } from './class-eleven.component';

describe('ClassElevenComponent', () => {
  let component: ClassElevenComponent;
  let fixture: ComponentFixture<ClassElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
