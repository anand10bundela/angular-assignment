import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [
    EmptyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EmptyComponent,
  ],
  providers: [
  ]
})
export class SharedModule { }
