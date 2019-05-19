import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryShowPage } from './category-show.page';

describe('CategoryShowPage', () => {
  let component: CategoryShowPage;
  let fixture: ComponentFixture<CategoryShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryShowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
