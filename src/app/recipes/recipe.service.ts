import { Recipe } from './recipe.modal';
import { Injectable } from '@angular/core';
import { IngredientModal } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    constructor(private slService: ShoppingListService){};

    private recipes: Recipe[] = [];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: IngredientModal[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }
}
