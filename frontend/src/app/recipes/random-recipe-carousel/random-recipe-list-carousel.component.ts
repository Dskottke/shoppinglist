import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-random-recipe-list',
  templateUrl: './random-recipe-carousel.component.html',
  styleUrls: ['./random-recipe-carousel.component.css']
})
export class RandomRecipeListCarousel implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    this.carouselInterval = setInterval(() => {
      if (this.currentIndex === this.recipes.length - 1) {
        this.currentIndex = 0
      }
      else
        this.setNext()
    }, 5000)
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval)
  }
}
