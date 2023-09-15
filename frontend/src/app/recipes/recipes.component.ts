import {Component} from '@angular/core';
import {RecipeApiService} from "./recipe-api.service";
import {ActivatedRoute} from "@angular/router";
import {RecipeStorageService} from "./recipe-storage.service";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    constructor(public recipeStorage : RecipeStorageService) {
    }
}
