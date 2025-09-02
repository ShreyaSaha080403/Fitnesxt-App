import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepTrackPage } from './sleep-track.page';

describe('SleepTrackPage', () => {
  let component: SleepTrackPage;
  let fixture: ComponentFixture<SleepTrackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
