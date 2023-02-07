import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormframeComponent } from './formframe.component';

describe('FormframeComponent', () => {
  let component: FormframeComponent;
  let fixture: ComponentFixture<FormframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
