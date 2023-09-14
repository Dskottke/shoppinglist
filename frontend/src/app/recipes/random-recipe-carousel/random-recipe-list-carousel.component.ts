import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Router} from "@angular/router";

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

    setPrev() {
        if (this.currentIndex !== 0) {
            this.currentIndex = this.currentIndex - 1;
            this.router.navigate([this.recipes[this.currentIndex].id], {relativeTo: this.route})
        }
    }

    setNext() {
        if (this.currentIndex !== this.recipes.length - 1) {
            this.currentIndex = this.currentIndex + 1;
            this.router.navigate([this.recipes[this.currentIndex].id], {relativeTo: this.route})
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        const id = changes.recipes.currentValue[this.currentIndex].id
        this.router.navigate([id], {relativeTo: this.route})
    }
}
