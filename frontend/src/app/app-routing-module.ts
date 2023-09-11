import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {IngredientApiService} from "./shopping-list/ingredient-api.service";
import {Ingredient} from "./shopping-list/ingredient.model";
import {RecipeApiService} from "./recipes/recipe-api.service";
import {Recipe} from "./recipes/recipe.model";


const shoppingListResolver: ResolveFn<Ingredient[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let list: Ingredient[];
  inject(IngredientApiService).ingredients.subscribe(value => list = value)
  return list
}
const randomRecipeResolver: ResolveFn<Recipe[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let list: Recipe[];
  inject(RecipeApiService).randomRecipes.subscribe(currentList => list = currentList)
  return list
}
export const routes: Routes = [
  {path: "", redirectTo: "shopping-list", pathMatch: 'full'},
  {path: "shopping-list", component: ShoppingListComponent, resolve: {data: shoppingListResolver}},
  {path: "recipes", component: RecipesComponent, resolve: {data: randomRecipeResolver}}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
