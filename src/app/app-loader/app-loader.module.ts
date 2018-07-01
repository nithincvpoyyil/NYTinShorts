import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from './app-settings.service';

export const getAPIKey = (appSettingsService: AppSettingsService) => {
  return () => {
    appSettingsService.getNYTToken();
  };
};

export const getAppSettings = (appSettingsService: AppSettingsService) => {
  return () => {
    appSettingsService.getAppSettings();
  };
};
@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getAPIKey,
      deps: [AppSettingsService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: getAppSettings,
      deps: [AppSettingsService],
      multi: true
    }
  ]
})
export class AppLoaderModule {}
