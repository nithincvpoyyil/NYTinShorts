import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {VersionComponent} from '../version/version.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent
  },
  { path: '**',  redirectTo: 'trending'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class RoutingModule {}
