import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AddIngredientComponent} from "./add-ingredient/add-ingredient.component";
import {FormsModule} from "@angular/forms";
import {IngredientApiService} from "./ingredient-api.service";
import {Ingredient} from "./ingredient.model";
import {of} from "rxjs";

describe('ShoppingListComponent', () => {
  let mockIngredientApiService: jasmine.SpyObj<IngredientApiService>;
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent,AddIngredientComponent],
      imports: [HttpClientTestingModule,FormsModule],
    });
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render 2 list-items when shopping-list array has 2 items',()=>{
    fixture.componentInstance.shoppingList = [
      {id:"10", name:"apple",amount:10},
      {id:"10", name:"banana",amount:10}
    ]
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement
    expect(htmlElement.querySelectorAll("li").length).toBe(2)
  })
  it('should render h5 with content "leere Liste" when shopping-list is empty',()=>{
    const htmlElement = fixture.nativeElement as HTMLElement
    expect(htmlElement.querySelector("h5").textContent).toBe("Leere Liste")
  })


});
