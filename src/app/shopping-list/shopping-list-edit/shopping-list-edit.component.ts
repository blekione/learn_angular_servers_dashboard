import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;
  @Output() deletedIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredient = this.getIngredient();
    if (ingredient) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onDeleteIngredient() {
    const ingredient = this.getIngredient();
    if (ingredient) {
      this.deletedIngredient.emit(ingredient)
    }
  }

  getIngredient(): Ingredient {
    if (!this.nameInput.nativeElement.value || this.nameInput.nativeElement.value === '') {
      return null;
    }
    if (!this.amountInput.nativeElement.value || this.amountInput.nativeElement.value === '' || this.amountInput.nativeElement.value < '1') {
      return null;
    }
    return new Ingredient(this.nameInput.nativeElement.value, parseInt(this.amountInput.nativeElement.value))
  }

  onClearIngredient() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
