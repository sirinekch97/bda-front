import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListebilanComponent} from './listebilan/listebilan.component';

const routes: Routes = [{path:'listebilan',component:ListebilanComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilanRoutingModule { }
