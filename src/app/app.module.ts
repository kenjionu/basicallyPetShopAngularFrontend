import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetShopComponent } from './pet-shop/pet-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    PetShopComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
