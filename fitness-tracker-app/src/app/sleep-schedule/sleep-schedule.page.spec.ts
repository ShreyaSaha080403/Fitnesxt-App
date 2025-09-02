import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepSchedulePage } from './sleep-schedule.page';

describe('SleepSchedulePage', () => {
  let component: SleepSchedulePage;
  let fixture: ComponentFixture<SleepSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
