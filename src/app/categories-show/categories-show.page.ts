import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service'
import { Category } from '../classes/category'; // classe category

@Component({
  selector: 'app-categories-show',
  templateUrl: './categories-show.page.html',
  styleUrls: ['./categories-show.page.scss'],
})
export class CategoriesShowPage implements OnInit {
  categories: Category[];
  constructor(private categoriesService: CategoriesService) {
   
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categories = this.categoriesService.getCategoriesService();
  }
}
