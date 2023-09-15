import {Component, OnInit} from '@angular/core';
import {RecipeStorageService} from "../recipe-storage.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  constructor(public recipeStorage : RecipeStorageService) {
  }



}
