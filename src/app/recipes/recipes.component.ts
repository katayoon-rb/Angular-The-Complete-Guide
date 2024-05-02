import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent,
    CommonModule,
    RouterModule,
  ],
  providers: [RecipeService],
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
  constructor() {}
  ngOnInit() {}
}
