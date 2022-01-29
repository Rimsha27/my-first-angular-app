import { Component, OnInit, OnDestroy } from '@angular/core';
import {IngredientModal} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:IngredientModal[];
  private igChangedSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients = this.slService.getIngredients();
      this.igChangedSub = this.slService.ingredientsChanged.subscribe((newIngredients: IngredientModal[]) => {
        this.ingredients = newIngredients;
      })
  }

  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }

  onEditItem(index: number){
     this.slService.startedEditing.next(index);
  }
}
