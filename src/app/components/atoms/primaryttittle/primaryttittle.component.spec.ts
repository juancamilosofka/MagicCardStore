import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryttittleComponent } from './primaryttittle.component';

describe('PrimaryttittleComponent', () => {
  let component: PrimaryttittleComponent;
  let fixture: ComponentFixture<PrimaryttittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryttittleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryttittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
