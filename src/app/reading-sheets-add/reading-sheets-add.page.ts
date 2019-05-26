import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingSheet } from 'src/app/classes/readingSheet';
import {ReadingSheetsService} from 'src/app/readingSheets.service';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-reading-sheets-add',
  templateUrl: './reading-sheets-add.page.html',
  styleUrls: ['./reading-sheets-add.page.scss'],
})

/**
* The component add a new reading sheet
*/
export class ReadingSheetsAddPage implements OnInit {

  category = new Category(0,"","");
  newReadingSheet = new ReadingSheet(0,"","",0,"","",this.category); 
  
  categories: Category[];

  constructor(private readingSheetsService: ReadingSheetsService, private categoriesService:CategoriesService, private router: Router, private route: ActivatedRoute, public toastCtrl: ToastController) { 
  }

  ngOnInit() {
    this.getCategories();
  }

  /**
  * Gets all categories
  */
 getCategories(){
  this.categories = this.categoriesService.getCategoriesService();
 }

 async SheetValidated(){
  const toast = await this.toastCtrl.create({
    message: 'La fiche de lecture a bien été sauvegardée !',
    duration: 1500,
    color: "success"
  }); 
  toast.present();
 }

 /**
  *  Creates the new reading sheet using a service
  */
 validation(){
  this.readingSheetsService.addReadingSheetService(this.newReadingSheet);

  this.SheetValidated();

  this.router.navigate(['/reading-sheets-show']);
  }

}
