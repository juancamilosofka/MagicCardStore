import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistcontainerComponent } from './cardlistcontainer.component';

describe('CardlistcontainerComponent', () => {
  let component: CardlistcontainerComponent;
  let fixture: ComponentFixture<CardlistcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlistcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardlistcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
