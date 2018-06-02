import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TrendingComponent} from './trending/trending.component';

const homeRoutes: Routes = [
    {
     path: 'trending',
     component: TrendingComponent,
     children: []
    }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
