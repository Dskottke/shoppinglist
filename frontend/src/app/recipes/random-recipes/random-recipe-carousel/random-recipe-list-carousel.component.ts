import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../models/recipe.model";

@Component({
    selector: 'app-random-recipe-carousel',
    templateUrl: './random-recipe-carousel.component.html',
    styleUrls: ['./random-recipe-carousel.component.css']
})
export class RandomRecipeListCarousel implements OnChanges {
    @Input() recipes: Recipe[] = []
    currentIndex: number = 0

    constructor(private router: Router, private route: ActivatedRoute) {
    }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.recipes?.currentValue && changes.recipes.currentValue.length > 0) {
      const id = changes.recipes.currentValue[this.currentIndex]?.id;
      if (id) {
        this.router.navigate([id], { relativeTo: this.route });
      }
    }
  }


    setPrev() {
        if (this.currentIndex !== 0) {
            this.currentIndex = this.currentIndex - 1;
            this.navigate()
        }
    }

    setNext() {
        if (this.currentIndex !== this.recipes.length - 1) {
            this.currentIndex = this.currentIndex + 1;
            this.navigate()
        }
    }

    setCurrent(i: number) {
        this.currentIndex = i
        this.navigate()
    }

    navigate() {
        this.router.navigate([this.recipes[this.currentIndex].id], {relativeTo: this.route})
    }
}
