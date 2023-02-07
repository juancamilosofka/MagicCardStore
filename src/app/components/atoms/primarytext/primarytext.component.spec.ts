import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarytextComponent } from './primarytext.component';

describe('PrimarytextComponent', () => {
  let component: PrimarytextComponent;
  let fixture: ComponentFixture<PrimarytextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarytextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
