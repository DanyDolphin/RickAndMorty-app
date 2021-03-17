import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportTriggerComponent } from './viewport-trigger.component';

describe('ViewportTriggerComponent', () => {
  let component: ViewportTriggerComponent;
  let fixture: ComponentFixture<ViewportTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewportTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
