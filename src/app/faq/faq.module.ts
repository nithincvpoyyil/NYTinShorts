import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqMainPageComponent } from './faq-main-page/faq-main-page.component';
import { FaqItemsComponent } from './faq-items/faq-items.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'question1',
    component: FaqMainPageComponent,
    children: []
  },
  {
    path: 'question2',
    component: FaqItemsComponent,
    children: []
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [FaqMainPageComponent, FaqItemsComponent]
})
export class FaqModule {}
