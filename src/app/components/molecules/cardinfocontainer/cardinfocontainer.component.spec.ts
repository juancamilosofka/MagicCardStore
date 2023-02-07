import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinfocontainerComponent } from './cardinfocontainer.component';

describe('CardinfocontainerComponent', () => {
  let component: CardinfocontainerComponent;
  let fixture: ComponentFixture<CardinfocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardinfocontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardinfocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
