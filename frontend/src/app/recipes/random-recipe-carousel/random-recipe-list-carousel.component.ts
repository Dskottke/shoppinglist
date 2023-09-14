import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-random-recipe-carousel',
  templateUrl: './random-recipe-carousel.component.html',
  styleUrls: ['./random-recipe-carousel.component.css']
})
export class RandomRecipeListCarousel {
  @Input() recipes: Recipe[] = []
  currentIndex: number = 0
  carouselInterval: any

  setPrev() {
    if (this.currentIndex !== 0) {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  setNext() {
    if (this.currentIndex !== this.recipes.length - 1)
      this.currentIndex = this.currentIndex + 1;
  }




}
