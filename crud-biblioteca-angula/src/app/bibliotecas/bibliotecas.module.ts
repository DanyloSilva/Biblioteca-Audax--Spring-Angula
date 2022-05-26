import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecasRoutingModule } from './bibliotecas-routing.module';
import { BibliotecasComponent } from './bibliotecas/bibliotecas.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    BibliotecasComponent
  ],
  imports: [
    CommonModule,
    BibliotecasRoutingModule,
    MatListModule
  ]
})
export class BibliotecasModule { }
