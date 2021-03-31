import { Recipe } from './recipe.modal';
import { Injectable } from '@angular/core';
import { IngredientModal } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService){};
    private recipes: Recipe[] = [
        new Recipe(
            "Rita's 'rowdy' enchiladas recipe", 
            'Serves 4', 
            'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg',
            [
                new IngredientModal('Meat', 1),
                new IngredientModal('Eggs', 10)
            ]
        ),
        new Recipe(
                'Healthy living enchiladas recipe',
                'Serves 4', 
                'https://realfood.tesco.com/media/images/Healthy-Living-enchilladas-1l-df85f8b5-6f76-4e5e-9af5-a73ec6de9cca-0-1400x919.jpg',
                [
                    new IngredientModal('Meat', 1),
                    new IngredientModal('Eggs', 10)
                ]
                ),
        new Recipe(
            'Spicy rice and bean enchiladas recipe', 
            'Serves 4', 
            'https://realfood.tesco.com/media/images/HE-SPICYRICEANDBEAN-da884994-00a8-4b40-b49b-39cd74025f33-0-472x310.jpg',
            [
                new IngredientModal('Meat', 1),
                new IngredientModal('Eggs', 10)
            ]),
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: IngredientModal[]){
        this.slService.addIngredients(ingredients);
    }

}