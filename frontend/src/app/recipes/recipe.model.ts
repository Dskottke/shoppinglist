import {RequiredIngredient} from "../shopping-list/models/requiredIngredient.model";

export class Recipe {
  constructor(
    public id: string,
    public title: string,
    public summary:string,
    public extendedIngredients: RequiredIngredient[],
    public image: string,
    public readyInMinutes: number
  ) {
  }
}
