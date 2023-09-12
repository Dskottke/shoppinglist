import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeApiService} from "./recipe-api.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  randomRecipes: Recipe[] = []

  constructor(private recipeApiService: RecipeApiService) {
  }
  ngOnInit(): void {
    this.recipeApiService.randomRecipes.subscribe((recipes) => {
      this.randomRecipes = recipes
    })
  }

}
