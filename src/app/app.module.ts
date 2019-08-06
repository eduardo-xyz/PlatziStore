import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModule } from './add/add.module';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
