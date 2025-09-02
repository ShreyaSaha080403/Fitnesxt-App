import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreinfoPage } from './moreinfo.page';

describe('MoreinfoPage', () => {
  let component: MoreinfoPage;
  let fixture: ComponentFixture<MoreinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
