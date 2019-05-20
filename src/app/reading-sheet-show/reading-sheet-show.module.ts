import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReadingSheetShowPage } from './reading-sheet-show.page';

const routes: Routes = [
  {
    path: '',
    component: ReadingSheetShowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReadingSheetShowPage]
})
export class ReadingSheetShowPageModule {}
