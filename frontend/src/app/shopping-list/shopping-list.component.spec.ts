import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingListComponent} from './shopping-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AddIngredientComponent} from "./add-ingredient/add-ingredient.component";
import {FormsModule} from "@angular/forms";
import {IngredientApiService} from "./ingredient-api.service";
import {Ingredient} from "./models/ingredient.model";

describe('ShoppingListComponent', () => {
    let component: ShoppingListComponent;
    let fixture: ComponentFixture<ShoppingListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingListComponent, AddIngredientComponent],
            imports: [HttpClientTestingModule, FormsModule],
        });
        fixture = TestBed.createComponent(ShoppingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
