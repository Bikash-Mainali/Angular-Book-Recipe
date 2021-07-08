import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipesComponent} from "../../recipes.component";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  private isItemSelected: boolean = false;
  @Input() rsp!: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }


  onSelected(recipe: Recipe) {
    this.isItemSelected = true;
    this.recipeSelected.emit();
  }

  get temSelected() {
    return this.isItemSelected;
  }

}
