import {TestBed} from '@angular/core/testing';

import {IngredientApiService} from './ingredient-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Ingredient} from "./ingredient.model";

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
  it('should fetch ingredients', () => {
    const ingredients: Ingredient[] = [
      {id: "1", name: "apple", amount: 10, succeed: false,type:"Stk"},
      {id: "2", name: "banana", amount: 5, succeed: false, type:"Stk"}
    ]
    service.getAllIngredients()
    const req = httpMock.expectOne("/api/ingredients")
    expect(req.request.method).toBe("GET")
    req.flush(ingredients)
    service.ingredients.subscribe((response) => {
      expect(ingredients).toEqual(response)
    })
  })
  it('should add an ingredient', () => {
    const ingredientToAdd: Ingredient = {
      id: "1", name: "apple", amount: 10, succeed: false, type: "Stk"
    }
    const expected : Ingredient[] = [ingredientToAdd]

    service.addIngredient(ingredientToAdd)
    const req = httpMock.expectOne("/api/ingredients")
    expect(req.request.method).toBe("PUT")
    expect(req.request.body).toBe(ingredientToAdd)
    req.flush({id: "1", name: "apple", amount: 10}, {status: 201,statusText:"Created"})
    service.ingredients.subscribe((ingredients)=>{
      expect(expected).toBe(ingredients)
    })
  })
  it('should update an ingredient', () => {
    const ingredientToAdd: Ingredient = {
      id: "1", name: "apple", amount: 10, succeed: false ,type:"Stk"
    }
    const expected: Ingredient[] = [ingredientToAdd]

    service.addIngredient(ingredientToAdd)
    const req = httpMock.expectOne("/api/ingredients")
    expect(req.request.method).toBe("PUT")
    expect(req.request.body).toBe(ingredientToAdd)
    req.flush({id: "1", name: "apple", amount: 10}, {status: 200, statusText: "Created"})
    service.ingredients.subscribe((ingredients) => {
      expect(expected).toBe(ingredients)
    })
  })
})
