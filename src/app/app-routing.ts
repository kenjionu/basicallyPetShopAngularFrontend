import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PetShopComponent } from "./pet-shop/pet-shop.component";
import { CommonModule } from '@angular/common';



export const routes: Routes = [{
path: '', pathMatch: 'full', component: PetShopComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
