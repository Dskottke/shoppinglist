import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeApiService} from "./recipe-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    randomRecipes: Recipe[] = []

    constructor(private recipeApiService: RecipeApiService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.recipeApiService.randomRecipes.subscribe((recipes) => {
            this.randomRecipes = recipes
        })
    }

}
