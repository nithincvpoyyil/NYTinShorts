import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './trending/trending.component';
import { RoutingModule } from './home.routing.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { UiModule } from '../ui/ui.module';
import { FeaturedComponent } from './featured/featured.component';
@NgModule({
  imports: [
    CommonModule, RoutingModule, CoreModule, MaterialModule, UiModule
  ],
  declarations: [TrendingComponent, FeaturedComponent],
  exports: [TrendingComponent]
})
export class HomeModule { }
