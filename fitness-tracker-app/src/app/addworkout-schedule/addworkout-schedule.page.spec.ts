import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddworkoutSchedulePage } from './addworkout-schedule.page';

describe('AddworkoutSchedulePage', () => {
  let component: AddworkoutSchedulePage;
  let fixture: ComponentFixture<AddworkoutSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworkoutSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
