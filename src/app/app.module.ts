import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    FeedbackComponent,
    ShippingAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
