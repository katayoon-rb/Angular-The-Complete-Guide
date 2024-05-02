import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}
  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
