import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeApiService {
    randomRecipe: Recipe[] = []

    constructor(private http: HttpClient) {
    }

    getRandomRecipes() {
        return this.http.get<Recipe[]>("api/recipes/random").subscribe({
            next: (response) => {
                this.randomRecipe = response
            }
        })
    }


}
