import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/model/ingredient.model";
import { Recipe } from "./model/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schabowy z ziemniaczkami i sorowka',
      'Yummy Polish delicates',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kotlet_Schabowy.jpg/540px-Kotlet_Schabowy.jpg', 
      [new Ingredient('ziemniaki', 10), new Ingredient('mieso', 1), new Ingredient('kapusta', 1)]),
    new Recipe(
      'Bigos',
      'Kapusta w garku a mieso w lesie',
      'https://upload.wikimedia.org/wikipedia/commons/8/8b/Bigos_in_Krak%C3%B3w.jpg', 
      [new Ingredient('kapusta', 1), new Ingredient('grzyby', 10)])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }


}