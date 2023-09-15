import {Component} from '@angular/core';
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
