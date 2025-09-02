import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Onboard1Page } from './onboard1.page';

describe('Onboard1Page', () => {
  let component: Onboard1Page;
  let fixture: ComponentFixture<Onboard1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
