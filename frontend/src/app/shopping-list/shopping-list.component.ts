import {Component, OnInit} from '@angular/core';
import {Ingredient} from "./models/ingredient.model";
import {IngredientApiService} from "./ingredient-api.service";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = []

  constructor(private ingredientApiService : IngredientApiService, private activeRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.ingredientApiService.ingredients.subscribe((value)=>{
      this.shoppingList = value
    })
    this.activeRoute.data.subscribe((data: Data) => {
      this.shoppingList = data['data']
    })
  }


  onDoneClick() {
    const ingredientsDone: string[] =
      this.shoppingList.filter((ingredient) => ingredient.succeed === true)
        .map((ingredient) => ingredient.id)
    this.ingredientApiService.setDone(ingredientsDone)
  }
}
