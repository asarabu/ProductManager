import { ConvertToSpacePipe } from './../shared/convert-to-space.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([
      {path:'products', component: ProductComponent},
      {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ])
  ]
})
export class ProductModule { }
