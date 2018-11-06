import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MackbookImageInfoComponent } from './mackbook-image-info.component';

describe('MackbookImageInfoComponent', () => {
  let component: MackbookImageInfoComponent;
  let fixture: ComponentFixture<MackbookImageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MackbookImageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MackbookImageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
