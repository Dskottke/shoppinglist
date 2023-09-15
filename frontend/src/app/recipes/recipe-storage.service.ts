import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeStorageService {
  randomRecipe: Recipe[] = []
  activeRecipe : Recipe
  constructor() { }
}
