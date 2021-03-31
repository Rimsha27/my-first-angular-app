import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { IngredientModal } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IngredientModal;
  @ViewChild('f',{static: false}) slForm: NgForm;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((index: number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.slService.getIncredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      })
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new IngredientModal(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.slService.removeIngredient(this.editedItemIndex);
  }
}
