import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-random-recipe-list',
  templateUrl: './random-recipe-list.component.html',
  styleUrls: ['./random-recipe-list.component.css']
})
export class RandomRecipeListComponent {
@Input() recipes: Recipe[] = []


}
