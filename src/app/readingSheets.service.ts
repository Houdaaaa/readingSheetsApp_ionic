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
  Cat1 = new Category(1, "Romans", "Il s'agit de romans");
  Cat2 =new Category(2, "Philosophie", "Ces bouquins traitent de philo");
  readingSheet1 = new ReadingSheet(1,"Le loup des steppes", "je ne sais plus", 200, "Résumé", "Analyse critique", this.Cat1);
  readingSheet2 = new ReadingSheet(1,"L'alchimiste", "Paulo Coelho", 200, "Résumé", "Analyse critique", this.Cat2);

  readingSheetsItems: ReadingSheet[] = [
    this.readingSheet1,
    this.readingSheet2
  ]


  constructor() { }

  /**
  * Gets all reading sheets availables using an API
  */
  getReadingSheetsService(): ReadingSheet[] {
    return this.readingSheetsItems;
  }
}
