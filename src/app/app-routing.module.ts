import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { ProductsDetailsComponent } from '../app/products-details/products-details.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductsDetailsComponent },
  { path: 'feedback', component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
