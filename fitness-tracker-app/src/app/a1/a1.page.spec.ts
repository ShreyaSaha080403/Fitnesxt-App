import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A1Page } from './a1.page';

describe('A1Page', () => {
  let component: A1Page;
  let fixture: ComponentFixture<A1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(A1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
