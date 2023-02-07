import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardlistComponent } from './usercardlist.component';

describe('UsercardlistComponent', () => {
  let component: UsercardlistComponent;
  let fixture: ComponentFixture<UsercardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
