import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeVoitureComponent} from './listevoiture/listevoiture.component'
import { AjoutervoitureComponent } from './ajoutervoiture/ajoutervoiture.component';

const routes: Routes = [{path:'listevoitures',component:ListeVoitureComponent},
{path:'ajoutervoiture',component:AjoutervoitureComponent},
{path:'modifiervoiture/:id',component:AjoutervoitureComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule { }
