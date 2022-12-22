import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item/item.component';




@NgModule({
  declarations: [
    CatalogComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
RouterModule

  ],
  exports:[
    CatalogComponent,
    ItemComponent
  ]
})
export class ItemsModule { }
