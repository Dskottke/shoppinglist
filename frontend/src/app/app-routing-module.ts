import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeApiService} from "./recipes/recipe-api.service";
import {Recipe} from "./recipes/recipe.model";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";



const recipeDetailResolver: ResolveFn<Recipe> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id']
  const recipeToFind = inject(RecipeApiService).randomRecipe.find(recipe=> recipe.id === id)
  if(recipeToFind) {
    return recipeToFind
  }
  inject(Router).navigate(['recipes'])
}
export const routes: Routes = [
  {path: "", redirectTo: "shopping-list", pathMatch: 'full'},
  {path: "shopping-list", component: ShoppingListComponent},
  {
    path: "recipes", component: RecipesComponent,
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
