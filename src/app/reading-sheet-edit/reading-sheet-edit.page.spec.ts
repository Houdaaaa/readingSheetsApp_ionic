import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSheetEditPage } from './reading-sheet-edit.page';

describe('ReadingSheetEditPage', () => {
  let component: ReadingSheetEditPage;
  let fixture: ComponentFixture<ReadingSheetEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSheetEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSheetEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
