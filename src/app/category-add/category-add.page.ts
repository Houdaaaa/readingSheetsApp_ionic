import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute,  public toastCtrl: ToastController) { 
  }

  ngOnInit() {
  }

  async CategoryValidated(){
    const toast = await this.toastCtrl.create({
      message: 'La catégorie a bien été sauvegardée !',
      duration: 1500,
      color: "success"
    }); 
    toast.present();
   }

  /**
  * Creates the new category using a service
  */
  validation(){
    this.categoriesService.addCategoryService(this.newCategory)
    this.CategoryValidated();
    this.router.navigate(['/category/' + this.newCategory.title]);
  }

}
