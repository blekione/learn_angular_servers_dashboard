import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('milk', 0.5), new Ingredient('sugar', 400)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
