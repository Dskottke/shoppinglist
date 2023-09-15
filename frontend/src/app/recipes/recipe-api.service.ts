import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeStorageService} from "./recipe-storage.service";
import {Recipe} from "./models/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeApiService {

    constructor(private http: HttpClient, private recipeStorage : RecipeStorageService) {
    }

    getRandomRecipes() {
        return this.http.get<Recipe[]>("api/recipes/random").subscribe({
            next: (response) => {
                this.recipeStorage.randomRecipe = response
            }
        })
    }


}
