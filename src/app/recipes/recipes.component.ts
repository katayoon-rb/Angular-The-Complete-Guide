import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from '../shared/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  imports: [RecipeListComponent, RecipeDetailComponent, CommonModule],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor() {}
  ngOnInit() {}
}
