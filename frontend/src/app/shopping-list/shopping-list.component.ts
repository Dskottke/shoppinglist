import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "./ingredient.model";
import {IngredientApiService} from "./ingredient-api.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = []

  constructor(private ingredientApiService: IngredientApiService) {
  }

  ngOnInit(): void {
    this.getIngredients()
  }

  getIngredients() {
    this.ingredientApiService.ingredients.subscribe((ingredients) => {
      this.shoppingList = ingredients;
    })
  }

  onDoneClick() {
    const ingredientsDone : string[] =
      this.shoppingList.filter((ingredient)=>ingredient.succeed === true)
        .map((ingredient)=> ingredient.id)
    this.ingredientApiService.setDone(ingredientsDone)
  }
}
