import {Component, OnInit} from '@angular/core';
import {IngredientApiServiceService} from "./shopping-list/ingredient-api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private ingredientApiService: IngredientApiServiceService) {

  }
  ngOnInit(): void {
    this.ingredientApiService.getAllIngredients();
  }


}
