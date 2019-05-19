import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})

/**
* The component edit an existing category
*/
export class CategoryEditPage implements OnInit {

  public categoryToEdit: Category

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.getCategoryToEdit();
  }

  /**
  * Gets the category to edit in the object "categoryToEdit"
  */
  getCategoryToEdit(){
    const title = this.route.snapshot.paramMap.get('title');
    this.categoryToEdit = this.categoriesService.getCategoryService(title);
  }

  /**
  * Update the category using a service
  */
  validation(){
  this.categoriesService.editCategoryService(this.categoryToEdit);
  this.router.navigate(['/category/' + this.categoryToEdit.title]);
}

}
