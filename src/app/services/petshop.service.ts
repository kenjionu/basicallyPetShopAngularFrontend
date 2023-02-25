import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



  export interface Pet{
    petName: string,
    petAge: string;
    petRace: string;
    petWeight: string;
    hairTipe: string;
    enumPetTratamiento: string;
    petCode: string;
  }



  @Injectable({
    providedIn: 'root'
  })

  export class PetService {

    constructor(public http: HttpClient) {

    }
    getAllPets(){
      return this.http.get('http://localhost:8080/pet')
    }

    // getDigimonName(id: any){
    //   return this.http.get(`https://www.digi-api.com/api/v1/digimon/${id}`)
    // }
  }



