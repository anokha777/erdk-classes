import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTenComponent } from './class-ten.component';

describe('ClassTenComponent', () => {
  let component: ClassTenComponent;
  let fixture: ComponentFixture<ClassTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
