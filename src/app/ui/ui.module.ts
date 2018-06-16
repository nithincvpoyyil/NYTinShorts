import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MaterialModule } from '../material/material.module';
import { ArticleTileComponent } from './article-tile/article-tile.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [ArticleCardComponent, ArticleTileComponent, FeaturedCardComponent],
  exports: [ArticleCardComponent, ArticleTileComponent, FeaturedCardComponent]
})
export class UiModule { }
