import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealEventsComponent } from './deal-events.component';

describe('DealEventsComponent', () => {
  let component: DealEventsComponent;
  let fixture: ComponentFixture<DealEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
