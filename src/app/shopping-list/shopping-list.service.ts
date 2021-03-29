import { IngredientModal } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<IngredientModal[]>();

    ingredients:IngredientModal[] = [
        new IngredientModal('Apples', 5),
        new IngredientModal('Tomatoes', 10)
    ]

    getIncredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: IngredientModal){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: IngredientModal[]){
        this.ingredients.push(...ingredients); // to turn the array into a list of single ingredients
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}