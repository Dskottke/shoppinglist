import { TestBed } from '@angular/core/testing';

import { IngredientApiServiceService } from './ingredient-api-service.service';

describe('IngredientApiServiceService', () => {
  let service: IngredientApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
