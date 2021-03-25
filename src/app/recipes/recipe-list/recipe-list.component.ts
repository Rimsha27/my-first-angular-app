import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Rita's 'rowdy' enchiladas recipe", 'Serves 4', 'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg'),
    new Recipe('Healthy living enchiladas recipe', 'Serves 4', 'https://realfood.tesco.com/media/images/Healthy-Living-enchilladas-1l-df85f8b5-6f76-4e5e-9af5-a73ec6de9cca-0-1400x919.jpg'),
    new Recipe('Spicy rice and bean enchiladas recipe', 'Serves 4', 'https://realfood.tesco.com/media/images/HE-SPICYRICEANDBEAN-da884994-00a8-4b40-b49b-39cd74025f33-0-472x310.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
