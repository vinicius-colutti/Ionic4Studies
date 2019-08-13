import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CssUtilitiesPage } from './css-utilities.page';

const routes: Routes = [
  {
    path: '',
    component: CssUtilitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CssUtilitiesPage]
})
export class CssUtilitiesPageModule {}
