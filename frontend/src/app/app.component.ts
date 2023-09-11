import {Component, OnInit} from '@angular/core';
import {IngredientApiService} from "./shopping-list/ingredient-api.service";
import {RecipeApiService} from "./recipes/recipe-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ingredientApiService: IngredientApiService, private recipeService: RecipeApiService) {

  }
  ngOnInit(): void {
    this.ingredientApiService.getAllIngredients();
    this.recipeService.getRandomRecipes();
  }


}
