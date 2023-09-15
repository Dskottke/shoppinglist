import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipeListCarousel } from './random-recipe-list-carousel.component';

describe('RandomRecipeListComponent', () => {
  let component: RandomRecipeListCarousel;
  let fixture: ComponentFixture<RandomRecipeListCarousel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomRecipeListCarousel]
    });
    fixture = TestBed.createComponent(RandomRecipeListCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
