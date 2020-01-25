import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoitureRoutingModule } from './voiture-routing.module';
import { ListeVoitureComponent } from './listevoiture/listevoiture.component';
import { AjoutervoitureComponent } from './ajoutervoiture/ajoutervoiture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListeVoitureComponent, AjoutervoitureComponent],
  imports: [
    CommonModule,
    VoitureRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VoitureModule { }
