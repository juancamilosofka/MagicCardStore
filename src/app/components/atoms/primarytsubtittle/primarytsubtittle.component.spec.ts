import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarytsubtittleComponent } from './primarytsubtittle.component';

describe('PrimarytsubtittleComponent', () => {
  let component: PrimarytsubtittleComponent;
  let fixture: ComponentFixture<PrimarytsubtittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarytsubtittleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarytsubtittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
