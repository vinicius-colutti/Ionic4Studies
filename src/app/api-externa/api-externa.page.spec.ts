import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExternaPage } from './api-externa.page';

describe('ApiExternaPage', () => {
  let component: ApiExternaPage;
  let fixture: ComponentFixture<ApiExternaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExternaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
