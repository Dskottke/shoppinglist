import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  randomRecipes: Subject<Recipe[]> = new BehaviorSubject([])

  constructor(private http: HttpClient) {}

  getRandomRecipes(){
    this.http.get<Recipe[]>("api/recipes/random").subscribe({
      next: (value)=>{
        this.randomRecipes.next(value)
      }
    })
  }


}
