import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IngredientApiServiceService} from "../ingredient-api-service.service";
import {Ingredient} from "../ingredient.model";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent{
@ViewChild("ingredientForm", {static:true}) form : NgForm
  constructor(private ingredientApiService: IngredientApiServiceService){
  }
  onFormSubmit(){
  const ingredientToAdd = this.form.form.value as Ingredient
  this.ingredientApiService.addIngredient(ingredientToAdd)
  }
  onFormReset(){
  this.form.resetForm()
  }
}
