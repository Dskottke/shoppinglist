import {Component, OnInit} from '@angular/core';
import {Ingredient} from "./models/ingredient.model";
import {IngredientApiService} from "./ingredient-api.service";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {

  constructor(public ingredientApiService : IngredientApiService) {
  }

  onDoneClick() {
    const ingredientsDone: string[] =
      this.ingredientApiService.ingredients.filter((ingredient) => ingredient.succeed === true)
        .map((ingredient) => ingredient.id)
    this.ingredientApiService.setDone(ingredientsDone)
  }
}
