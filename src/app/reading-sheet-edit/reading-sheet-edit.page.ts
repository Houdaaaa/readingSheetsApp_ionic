import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingSheet } from 'src/app/classes/readingSheet';
import {ReadingSheetsService} from 'src/app/readingSheets.service';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service'

@Component({
  selector: 'app-reading-sheet-edit',
  templateUrl: './reading-sheet-edit.page.html',
  styleUrls: ['./reading-sheet-edit.page.scss'],
})

/**
* The component edit a reading sheet 
*/
export class ReadingSheetEditPage implements OnInit {

  readingSheetToEdit: ReadingSheet;
  categories: Category[];

  constructor(private readingSheetsService: ReadingSheetsService, private categoriesService:CategoriesService, private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.getReadingSheetToEdit();
    this.getCategories();
  }

  /**
  * Gets the reading sheet object to edit 
  */
 getReadingSheetToEdit(){
  const id = this.route.snapshot.paramMap.get('id');
  this.readingSheetToEdit = this.readingSheetsService.getReadingSheetService(Number(id));
  }

  /**
  * Gets all categories availables 
  */
 getCategories(){
  this.categories = this.categoriesService.getCategoriesService();
 }

 /**
  * Updates the reading sheet using a service
  */
 validation(){

  this.readingSheetsService.editReadingSheetService(this.readingSheetToEdit);
  this.router.navigate(['reading-sheet/'+ String(this.readingSheetToEdit.id)]);

}
}
