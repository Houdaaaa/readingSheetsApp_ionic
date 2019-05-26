import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute,public toastCtrl: ToastController) { 
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

  async CategoryModified(){
    const toast = await this.toastCtrl.create({
      message: 'La catégorie a bien été modifiée !',
      duration: 1500,
      color: "success"
    }); 
    toast.present();
   }

  /**
  * Update the category using a service
  */
  validation(){
  this.categoriesService.editCategoryService(this.categoryToEdit);
  this.CategoryModified();
  this.router.navigate(['/category/' + this.categoryToEdit.title]);
}

}
