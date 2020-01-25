import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { ListelocationsComponent } from './listelocations/listelocations.component';
import { AjouterlocationComponent } from './ajouterlocation/ajouterlocation.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [ListelocationsComponent, AjouterlocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LocationModule { }
