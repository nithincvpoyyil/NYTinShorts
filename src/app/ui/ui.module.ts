import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [ArticleCardComponent],
  exports: [ArticleCardComponent]
})
export class UiModule { }
