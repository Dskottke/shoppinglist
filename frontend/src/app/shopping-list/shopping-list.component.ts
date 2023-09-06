import {Component, OnInit} from '@angular/core';
import {Ingredient} from "./ingredient.model";
import {IngredientApiServiceService} from "./ingredient-api-service.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = []

  constructor(private ingredientApiService: IngredientApiServiceService) {
  }

  ngOnInit(): void {
    this.ingredientApiService.ingredients.subscribe((ingredients) => {
      this.shoppingList = ingredients;
    })
  }

}
