import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilanRoutingModule } from './bilan-routing.module';
import { ListebilanComponent } from './listebilan/listebilan.component';


@NgModule({
  declarations: [ListebilanComponent],
  imports: [
    CommonModule,
    BilanRoutingModule
  ]
})
export class BilanModule { }
