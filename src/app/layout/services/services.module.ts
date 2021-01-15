import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './common/common.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonService,

  ],
  exports: [
    CommonService,
  ]
})
export class ServicesModule { }
