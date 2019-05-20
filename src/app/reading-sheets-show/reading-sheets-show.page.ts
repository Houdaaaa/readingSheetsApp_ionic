import { Component, OnInit } from '@angular/core';
import {ReadingSheetsService} from 'src/app/readingSheets.service';
import { ReadingSheet } from 'src/app/classes/readingSheet';

@Component({
  selector: 'app-reading-sheets-show',
  templateUrl: './reading-sheets-show.page.html',
  styleUrls: ['./reading-sheets-show.page.scss'],
})

/**
* The component displays all reading sheets
*/
export class ReadingSheetsShowPage implements OnInit {

  readingSheets: ReadingSheet[];

 constructor(private readingSheetsService: ReadingSheetsService) { }

  ngOnInit() {
    this.getReadingSheets();
  }


  /**
  * Gets all reading sheets to display 
  */
 getReadingSheets(): void {
  this.readingSheets = this.readingSheetsService.getReadingSheetsService();
  }

}
