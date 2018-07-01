import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import * as secuirty from '../security';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [secuirty.RouterNavGuard],
    resolve: [secuirty.RouterNavGuard]
  },
  {
    path: 'faq',
    loadChildren: '../faq/faq.module#FaqModule',
    canLoad: [secuirty.RouterNavGuard]
  },
  { path: '**', redirectTo: 'trending' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [secuirty.RouterNavGuard]
})
export class RoutingModule {}
