import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddIngredientComponent } from './shopping-list/add-ingredient/add-ingredient.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing-module";
import { RecipesComponent } from './recipes/recipes.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {
  RandomRecipeListCarousel
} from "./recipes/random-recipes/random-recipe-carousel/random-recipe-list-carousel.component";
import {RecipeInfoComponent} from "./recipes/random-recipes/recipe-info/recipe.info.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    AddIngredientComponent,
    RecipesComponent,
    RandomRecipeListCarousel,
    RecipeDetailComponent,
    RecipeInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
