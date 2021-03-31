import { IngredientModal } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new Subject<IngredientModal[]>();
    startedEditing = new Subject<number>();

    ingredients:IngredientModal[] = [
        new IngredientModal('Apples', 5),
        new IngredientModal('Tomatoes', 10)
    ]

    getIncredients(){
        return this.ingredients.slice();
    }

    getIncredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: IngredientModal){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: IngredientModal[]){
        this.ingredients.push(...ingredients); // to turn the array into a list of single ingredients
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: IngredientModal){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    removeIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}