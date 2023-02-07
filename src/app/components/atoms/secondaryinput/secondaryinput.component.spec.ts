import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryinputComponent } from './secondaryinput.component';

describe('SecondaryinputComponent', () => {
  let component: SecondaryinputComponent;
  let fixture: ComponentFixture<SecondaryinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
