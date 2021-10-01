import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() viewSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  showRecipes() {
    // console.log('in showRecipes');
    this.viewSelected.emit("recipes");
  }

  showShoppingList() {
    // console.log('in showShoppingList');
    this.viewSelected.emit("shopping-list");
  }
}
