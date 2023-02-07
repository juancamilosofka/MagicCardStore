import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContencardComponent } from './contencard.component';

describe('ContencardComponent', () => {
  let component: ContencardComponent;
  let fixture: ComponentFixture<ContencardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContencardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContencardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
