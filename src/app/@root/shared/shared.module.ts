import { NgModule } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,

  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
