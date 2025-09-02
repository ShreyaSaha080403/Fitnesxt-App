import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealSchedulePage } from './meal-schedule.page';

describe('MealSchedulePage', () => {
  let component: MealSchedulePage;
  let fixture: ComponentFixture<MealSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
