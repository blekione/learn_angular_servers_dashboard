import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/model/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('milk', 0.5), new Ingredient('sugar', 400)
      ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        const existingIngredient = this.ingredients.find(ingredientItem => ingredientItem.name === ingredient.name);
        if (existingIngredient) {
          existingIngredient.amount = existingIngredient.amount + ingredient.amount;
        } else {
          this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}