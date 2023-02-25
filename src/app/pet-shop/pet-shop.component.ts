import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from '../services/petshop.service';

@Component({
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.component.html',
  styleUrls: ['./pet-shop.component.scss']
})
export class PetShopComponent implements OnInit {
petsData: any;
constructor(public petDService: PetService){

}

  ngOnInit(){
    this.petsAllFetch();
  }


  petsAllFetch(){
    this.petDService.getAllPets().subscribe((data) => this.petsData = data );
  }
}
