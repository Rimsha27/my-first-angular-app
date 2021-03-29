import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { IngredientModal } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngredient = new IngredientModal(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
  }

}
