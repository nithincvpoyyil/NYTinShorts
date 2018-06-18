import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavmenuModule } from './navmenu/navmenu.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RoutingModule, NoopAnimationsModule, NavmenuModule, HomeModule, SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
