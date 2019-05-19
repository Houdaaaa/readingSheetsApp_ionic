import { Category } from 'src/app/classes/category';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })


/**
* This class specifies all services related to categories 
*/
export class CategoriesService {

    Cat1 = new Category(1, "Romans", "Il s'agit de romans");
    Cat2 =new Category(2, "Philosophie", "Ces bouquins traitent de philo")
    
    categoriesItems: Category[] = [
        this.Cat1,
        this.Cat2
    ]

    constructor() { 
    }

  
  /**
  * Gets all categories availables
  */
  getCategoriesService(): Category[] {
    return this.categoriesItems;
  }


  /**
  * Gets a specific category
  * 
  * @param {string} title - the title of the category desired
  */
 getCategoryService(title: string): Category {
    let trueCategory: Category;
    this.categoriesItems.forEach(category =>  {
        if (category.title === title){
            trueCategory = category;
        }
    });
    return trueCategory ;
  }


  /**
  * Edits a specific category 
  * 
  * @param {number} id - the id of the category to edit
  * @param {Category} editedCategory - the category object edited
  */
 editCategoryService(editedCategory: Category) {
    this.categoriesItems.forEach(category=> {
        if(category.id == editedCategory.id){
            category = editedCategory ;
        }
    });
  }

  /**
  * Adds a new category 
  * 
  * @param {Category} newCategory - the new category to add
  */
  addCategoryService(newCategory: Category) {
    const newId = this.categoriesItems[this.categoriesItems.length-1].id +1;
    newCategory.id = newId;  
    this.categoriesItems.push(newCategory);
  }



  /**
  * Deletes a specific category
  * 
  * @param {number} id - the id of the category to delete
  */
 deleteCategoryService(id: number) {
    this.categoriesItems.forEach(category => {
        if(category.id === id){
            this.categoriesItems.splice(this.categoriesItems.indexOf(category), 1);
        }
    });
    }

}