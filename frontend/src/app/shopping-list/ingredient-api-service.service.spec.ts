import { TestBed } from '@angular/core/testing';

import { IngredientApiServiceService } from './ingredient-api-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('IngredientApiServiceService', () => {
  let service: IngredientApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(IngredientApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
