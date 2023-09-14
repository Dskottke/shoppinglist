import {Injectable} from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {RequiredIngredient} from "./models/requiredIngredient.model";
import {Ingredient} from "./models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {
  ingredients: Ingredient[] = []

  constructor(private httpClient: HttpClient) {
  }

  getAllIngredients() {
    this.httpClient.get<Ingredient[]>("/api/ingredients").subscribe({
      next: (response) => {
        this.ingredients = response
      },
      error: error => {
        console.log(error)
      }
    })
  }


  addIngredient(ingredientToAdd: RequiredIngredient) {
    this.httpClient
      .put("/api/ingredients", ingredientToAdd, {observe: "response"})
      .subscribe({
        next: (response) => {
          if (response.status === HttpStatusCode.Created || response.status === HttpStatusCode.Ok) {
            this.getAllIngredients()
          }
        },
        error: error => {
          console.log(error)
        }
      });
  }

  setDone(ingredientsDone: string[]) {
    this.httpClient
      .delete("/api/ingredients", {observe: "response", body: ingredientsDone})
      .subscribe({
        next: (response) => {
          if (response.status === HttpStatusCode.NoContent) {
            this.getAllIngredients()
          }
        },
        error: error => {
          console.log(error)
        }
      })
  }
}

