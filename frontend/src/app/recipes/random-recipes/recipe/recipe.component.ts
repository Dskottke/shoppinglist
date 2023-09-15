import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../recipe.model";
import {RecipeStorageService} from "../../recipe-storage.service";



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
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