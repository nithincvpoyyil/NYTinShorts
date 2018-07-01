import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedSettings } from './localStorage.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SavedSettings],
  exports: [SavedSettings]
})
export class SharedModule {}
