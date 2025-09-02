import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Onboard2Page } from './onboard2.page';

describe('Onboard2Page', () => {
  let component: Onboard2Page;
  let fixture: ComponentFixture<Onboard2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboard2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
