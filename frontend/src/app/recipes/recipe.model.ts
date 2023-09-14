import {Ingredient} from "../shopping-list/ingredient.model";

export class Recipe {
  constructor(public id: string, public title: string, public extendedIngredients: Ingredient[], public image: string, public readyInMinutes: number) {
  }
}
