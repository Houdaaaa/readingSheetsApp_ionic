import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.page.html',
  styleUrls: ['./category-add.page.scss'],
})

/**
* The component add a new category of reading Sheet
*/
export class CategoryAddPage implements OnInit {

  newCategory = new Category(0,"","");

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

  /**
  * Creates the new category using a service
  */
  validation(){
    this.categoriesService.addCategoryService(this.newCategory)
    this.router.navigate(['/category/' + this.newCategory.title]);
  }

}
