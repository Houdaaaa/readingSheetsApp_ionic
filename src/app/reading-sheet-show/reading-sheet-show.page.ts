import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingSheet } from 'src/app/classes/readingSheet';
import {ReadingSheetsService} from 'src/app/readingSheets.service';


@Component({
  selector: 'app-reading-sheet-show',
  templateUrl: './reading-sheet-show.page.html',
  styleUrls: ['./reading-sheet-show.page.scss'],
})

/**
*  The component displays one reading sheet
*/
export class ReadingSheetShowPage implements OnInit {

  readingSheet: ReadingSheet;

  constructor(private readingSheetsService: ReadingSheetsService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.getReadingSheet();
  }

  /**
  * Gets the reading sheet object to display 
  */
 getReadingSheet(){
  let id = this.route.snapshot.paramMap.get('id');
  this.readingSheet = this.readingSheetsService.getReadingSheetService(Number(id));
  }

  /**
  * Delete the reading sheet using a service
  */
 deleteReadingSheet(){
  this.readingSheetsService.deletereadingSheetService(this.readingSheet.id);
  this.router.navigate(['/reading-sheets-show']);
}

}
