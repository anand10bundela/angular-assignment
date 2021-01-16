import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { DefaultComponent } from './containers/default/default.component';
import { InterfacesModule } from './interfaces/interfaces.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    InterfacesModule,
    PipesModule,
  ],
  providers: [HttpClientModule]
})
export class LayoutModule { }
