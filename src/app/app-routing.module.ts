import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'categories-show', loadChildren: './categories-show/categories-show.module#CategoriesShowPageModule' },
  { path: 'category/:title', loadChildren: './category-show/category-show.module#CategoryShowPageModule' },
  { path: 'category-add', loadChildren: './category-add/category-add.module#CategoryAddPageModule' },
  { path: 'category/:title/edit', loadChildren: './category-edit/category-edit.module#CategoryEditPageModule' },
  { path: 'reading-sheets-show', loadChildren: './reading-sheets-show/reading-sheets-show.module#ReadingSheetsShowPageModule' },
  { path: 'reading-sheets-add', loadChildren: './reading-sheets-add/reading-sheets-add.module#ReadingSheetsAddPageModule' },
  { path: 'reading-sheet/:id', loadChildren: './reading-sheet-show/reading-sheet-show.module#ReadingSheetShowPageModule' },
  { path: 'reading-sheet/:id/edit', loadChildren: './reading-sheet-edit/reading-sheet-edit.module#ReadingSheetEditPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
