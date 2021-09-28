import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Schabowy z ziemniaczkami i sorowka', 
      'Yummy Polish delicates', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kotlet_Schabowy.jpg/540px-Kotlet_Schabowy.jpg'),
    new Recipe(
      'Bigos', 
      'Kapusta w garku a mieso w lesie', 
      'https://upload.wikimedia.org/wikipedia/commons/8/8b/Bigos_in_Krak%C3%B3w.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
