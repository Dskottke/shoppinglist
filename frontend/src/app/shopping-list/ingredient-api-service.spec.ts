import {TestBed} from '@angular/core/testing';

import {IngredientApiService} from './ingredient-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Ingredient} from "./models/ingredient.model";

describe('IngredientApiService', () => {
  let service: IngredientApiService;
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IngredientApiService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

})
