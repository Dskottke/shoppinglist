import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeStorageService} from "../../recipe-storage.service";
import {Recipe} from "../../models/recipe.model";



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe.info.component.html',
  styleUrls: ['./recipe.info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  activeRecipe: Recipe

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeStorage: RecipeStorageService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.activeRecipe = data['recipe'];
    })
  }

  shortenSummaries(summary: string) {
    const sentences = summary.split(". ");
    sentences.pop();
    return sentences.join(". ")
  }

  activateRecipe() {
    this.recipeStorage.activeRecipe = this.activeRecipe
    this.router.navigate(['detail'],{relativeTo:this.route})
  }
}
