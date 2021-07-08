import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Recipe 1 Description', 'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg')
    , new Recipe('Recipe 2', 'Recipe 2 Description', 'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg')
  ]

  constructor() {
  }


  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
