import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLazyComponent } from './edit-lazy.component';

describe('EditLazyComponent', () => {
  let component: EditLazyComponent;
  let fixture: ComponentFixture<EditLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
