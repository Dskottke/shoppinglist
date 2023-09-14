import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IngredientApiService} from "../ingredient-api.service";
import {Ingredient} from "../ingredient.model";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent{
@ViewChild("ingredientForm", {static:true}) form : NgForm
  types   = ["g","L","Stk","ml","mg"]
  constructor(private ingredientApiService: IngredientApiService){
  }
  onFormSubmit(){
  const ingredientToAdd = this.form.form.value as Ingredient
  this.ingredientApiService.addIngredient(ingredientToAdd);
  this.form.resetForm();
  }
  onFormReset(){
  this.form.resetForm();
  }
}
