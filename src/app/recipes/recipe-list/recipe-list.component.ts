import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../../shared/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  imports: [RecipeItemComponent, CommonModule],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'title',
      'description',
      'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill'
    ),
    new Recipe(
      'title',
      'description',
      'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill'
    ),
    new Recipe(
      'title',
      'description',
      'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill'
    ),
  ];

  constructor() {}
  ngOnInit() {}
}
