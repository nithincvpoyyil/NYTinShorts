import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMultimedia, INYTRespose, IResultSet } from './nyt.response.model';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: []
})
export class ApiModule { }
