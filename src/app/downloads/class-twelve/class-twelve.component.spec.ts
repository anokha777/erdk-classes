import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTwelveComponent } from './class-twelve.component';

describe('ClassTwelveComponent', () => {
  let component: ClassTwelveComponent;
  let fixture: ComponentFixture<ClassTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
