import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category';
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.page.html',
  styleUrls: ['./category-show.page.scss'],
})

/**
*  The component displays one category and its specifications
*/
export class CategoryShowPage implements OnInit {

  category: Category;
  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCategory();
  }

  /**
  * Gets the category to be displayed
  */
 getCategory(){
  const title = this.route.snapshot.paramMap.get('title');
  this.category = this.categoriesService.getCategoryService(title)
 }


 /**
  * Delete the category using a service
  */
 deleteCategory(){
  this.categoriesService.deleteCategoryService(this.category.id);
  this.router.navigate(['/categories-show']);
}
    

}
