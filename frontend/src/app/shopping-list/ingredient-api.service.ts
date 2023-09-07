import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "./ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {
  ingredients: Subject<Ingredient[]> = new Subject()
  constructor(private httpClient : HttpClient) { }
  getAllIngredients(){
    this.httpClient.get<Ingredient[]>("/api/ingredients").subscribe({
      next: (response)=>{
        this.ingredients.next(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }
 addIngredient(ingredientToAdd : Ingredient){
 this.httpClient
   .put("/api/ingredients",ingredientToAdd,{observe:"response"})
   .subscribe({
     next: (response) => {
       if(response.status === 201){
         this.getAllIngredients()
       }
     },
     error: error => {
       console.log(error)
     }
   });
 }
}

