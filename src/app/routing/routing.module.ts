import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '**', redirectTo: 'trending' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule, AboutComponent],
  declarations: [AboutComponent]
})
export class RoutingModule {}
