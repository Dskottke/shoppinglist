import { Component } from '@angular/core';
import {Ingredient} from "./ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  shoppingList : Ingredient[] = [
  new Ingredient("1","Banane",20),
  new Ingredient("1","Apfel",20),
  new Ingredient("1","Birne",20),
]
}
