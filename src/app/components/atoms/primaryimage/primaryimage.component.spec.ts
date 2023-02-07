import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryimageComponent } from './primaryimage.component';

describe('PrimaryimageComponent', () => {
  let component: PrimaryimageComponent;
  let fixture: ComponentFixture<PrimaryimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
