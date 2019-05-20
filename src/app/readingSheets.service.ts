import { Injectable } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { ReadingSheet } from 'src/app/classes/readingSheet';

@Injectable({
    providedIn: 'root'
  })

/**
* This class specifies all services related to reading sheets  
*/
export class ReadingSheetsService {

  Cat1 = new Category(1, "Romans", "Il s'agit de romans")
  Cat2 =new Category(2, "Philosophie", "Ces bouquins traitent de philo")

  readingSheet1 = new ReadingSheet(1,"Le loup des steppes", "je ne sais plus", 200, "Résumé", "Analyse critique", this.Cat1)
  readingSheet2 = new ReadingSheet(2,"L'alchimiste", "Paulo Coelho", 200, "Résumé", "Analyse critique", this.Cat2)

  readingSheetsItems: ReadingSheet[] = [
    this.readingSheet1,
    this.readingSheet2
  ]


  constructor() { }

  /**
  * Gets all reading sheets availables
  */
  getReadingSheetsService(): ReadingSheet[] {
    return this.readingSheetsItems;
  }


  /**
  * Gets a specific reading sheet
  * 
  * @param {number} id - the id of the reading sheet desired 
  */
 getReadingSheetService(id: number): ReadingSheet {
    let trueSheet: ReadingSheet;
    this.readingSheetsItems.forEach(sheet =>  {
        if (sheet.id == id){
            trueSheet = sheet;
        }
    });
    return trueSheet ;
  }

  /**
  * Deletes a specific reading sheet
  * 
  * @param {number} id - the id of the reading sheet to delete
  */
 deletereadingSheetService(id: number): void {
    this.readingSheetsItems.forEach(sheet => {
        if(sheet.id == id){
            this.readingSheetsItems.splice(this.readingSheetsItems.indexOf(sheet), 1);
        }
    });
  }

  /**
  * Edits a specific reading sheet 
  * 
  * @param {number} id - the id of the reading sheet to edit
  * @param {any} editedReadingSheet - the params of the edited reading sheet 
  */
 editReadingSheetService(editedReadingSheet: any): void {
    this.readingSheetsItems.forEach(sheet=> {
        if(sheet.id == editedReadingSheet.id){
            sheet = editedReadingSheet ;
        }
    });
  }

  /**
  * Adds a new reading sheet using an API
  * 
  * @param {any} newReadingSheet - the params of the new reading sheet to send to the API
  */
 addReadingSheetService(newReadingSheet: ReadingSheet): void {
    const newId = this.readingSheetsItems[this.readingSheetsItems.length-1].id +1;
    newReadingSheet.id = newId;  
    this.readingSheetsItems.push(newReadingSheet);
  }
}
