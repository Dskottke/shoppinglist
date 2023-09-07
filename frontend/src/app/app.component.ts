import {Component, OnInit} from '@angular/core';
import {IngredientApiService} from "./shopping-list/ingredient-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ingredientApiService: IngredientApiService) {

  }
  ngOnInit(): void {
    this.ingredientApiService.getAllIngredients();
  }


}
