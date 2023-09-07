import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddIngredientComponent} from './add-ingredient.component';
import {FormsModule} from "@angular/forms";
import {IngredientApiService} from "../ingredient-api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AddIngredientComponent', () => {
  let component: AddIngredientComponent;
  let fixture: ComponentFixture<AddIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIngredientComponent],
      imports: [FormsModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(AddIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add a new Ingredient', async () => {

    await fixture.whenStable();

    setTimeout(() => {
      fixture.componentInstance.form.setValue({
        name: "apple",
        amount: 10
      });
    }, 1000)

    const service = fixture.debugElement.injector.get(IngredientApiService);
    const spyIngredient = spyOn(service, "addIngredient");

    component.onFormSubmit();

    expect(spyIngredient).toHaveBeenCalled();
    expect(fixture.componentInstance.form.form.value).toEqual({
      name: null,
      amount: null
    });
  });
  it('should disable the submit button when the form is invalid', async () => {

    await fixture.whenStable();

    fixture.componentInstance.form.setValue({
      name: "apple",
      amount: null
    })

    fixture.detectChanges();

    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBe(true);
  });

  it('should call the onFormSubmit() method when the form is submitted', async() => {

    await fixture.whenStable();

    fixture.componentInstance.form.setValue({
      name: "apple",
      amount: 10
    })

    spyOn(component, 'onFormSubmit');

    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();

    expect(component.onFormSubmit).toHaveBeenCalled();
  });

  it('should enable the submit button when the form is valid', async () => {

    await fixture.whenStable();

    fixture.componentInstance.form.setValue({
      name: "apple",
      amount: 10
    })

    fixture.detectChanges();

    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBe(false);
  });

});
