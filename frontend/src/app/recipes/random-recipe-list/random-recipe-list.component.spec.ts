import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipeListComponent } from './random-recipe-list.component';

describe('RandomRecipeListComponent', () => {
  let component: RandomRecipeListComponent;
  let fixture: ComponentFixture<RandomRecipeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomRecipeListComponent]
    });
    fixture = TestBed.createComponent(RandomRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
