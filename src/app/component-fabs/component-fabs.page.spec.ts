import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFabsPage } from './component-fabs.page';

describe('ComponentFabsPage', () => {
  let component: ComponentFabsPage;
  let fixture: ComponentFixture<ComponentFabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
