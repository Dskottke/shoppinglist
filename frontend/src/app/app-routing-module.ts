import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {IngredientApiService} from "./shopping-list/ingredient-api.service";
import {Ingredient} from "./shopping-list/models/ingredient.model";
import {RecipeApiService} from "./recipes/recipe-api.service";
import {Recipe} from "./recipes/recipe.model";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";


const shoppingListResolver: ResolveFn<Ingredient[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let list: Ingredient[];
  inject(IngredientApiService).ingredients.subscribe(value => list = value)
  return list
}
const recipesResolver: ResolveFn<Recipe[]> = (route:ActivatedRouteSnapshot, state : RouterStateSnapshot)=>{
  let list: Recipe[];
  inject(RecipeApiService).randomRecipes.subscribe(value => list = value)
  return list
}
const recipeDetailResolver: ResolveFn<Recipe> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id']
  let recipe: Recipe
  inject(RecipeApiService).randomRecipes.subscribe(currentList => {
    recipe = currentList.find(recipe =>
      recipe.id === id)
  })
  if(recipe) {
    return recipe
  }
  inject(Router).navigate(['recipes'])
}
export const routes: Routes = [
  {path: "", redirectTo: "shopping-list", pathMatch: 'full'},
  {path: "shopping-list", component: ShoppingListComponent, resolve: {data: shoppingListResolver}},
  {
    path: "recipes", component: RecipesComponent, resolve: {recipes: recipesResolver},
    children: [
      {path: ":id", component: RecipeDetailComponent, resolve: {recipe: recipeDetailResolver}}
    ]
  }
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
