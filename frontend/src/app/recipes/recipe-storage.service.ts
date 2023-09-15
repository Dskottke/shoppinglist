import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeComponent} from "./recipe/recipe.component";

@Injectable({
  providedIn: 'root'
})
export class RecipeStorageService {
  randomRecipe: Recipe[] = []
  activeRecipe : Recipe
  constructor() { }
}
