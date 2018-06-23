import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuConfigService } from './menu.config';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [CommonModule, HomeModule],
  providers: [MenuConfigService],
  declarations: [MenuComponent, MenuItemComponent],
  exports: [MenuComponent, MenuItemComponent]
})
export class NavmenuModule {}
