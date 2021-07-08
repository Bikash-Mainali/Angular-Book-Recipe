import {Component, OnInit, ViewChild} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;
  private serverPath = RecipeItemComponent;

  constructor() {
  }

  ngOnInit(): void {
  }
}
