import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "./ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientApiServiceService {
  constructor(private httpClient : HttpClient) { }
 addIngredient(ingredientToAdd : Ingredient){
 this.httpClient
   .post("api/ingredients",ingredientToAdd)
   .subscribe();
 }
}

