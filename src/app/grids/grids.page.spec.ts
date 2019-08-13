import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsPage } from './grids.page';

describe('GridsPage', () => {
  let component: GridsPage;
  let fixture: ComponentFixture<GridsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
