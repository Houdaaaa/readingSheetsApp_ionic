import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSheetShowPage } from './reading-sheet-show.page';

describe('ReadingSheetShowPage', () => {
  let component: ReadingSheetShowPage;
  let fixture: ComponentFixture<ReadingSheetShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSheetShowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSheetShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
