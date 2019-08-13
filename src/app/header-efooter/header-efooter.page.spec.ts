import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEFooterPage } from './header-efooter.page';

describe('HeaderEFooterPage', () => {
  let component: HeaderEFooterPage;
  let fixture: ComponentFixture<HeaderEFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
