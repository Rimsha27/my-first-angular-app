import { Component, OnInit } from '@angular/core';
import {IngredientModal} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:IngredientModal[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients = this.slService.getIncredients();
      this.slService.ingredientsChanged.subscribe((newIngredients: IngredientModal[]) => {
        this.ingredients = newIngredients;
      })
  }
}
