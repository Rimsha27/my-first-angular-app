import { Component, OnInit } from '@angular/core';
import {IngredientModal} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:IngredientModal[] = [
    new IngredientModal('Apples', 5),
    new IngredientModal('Tomatoes', 10)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
