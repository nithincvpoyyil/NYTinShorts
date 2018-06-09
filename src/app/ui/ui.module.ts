import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MaterialModule } from '../material/material.module';
import { ArticleTileComponent } from './article-tile/article-tile.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [ArticleCardComponent, ArticleTileComponent],
  exports: [ArticleCardComponent, ArticleTileComponent]
})
export class UiModule { }
