import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListelocationsComponent} from './listelocations/listelocations.component';
import {AjouterlocationComponent} from './ajouterlocation/ajouterlocation.component';




const routes: Routes = [{path:'listelocations',component:ListelocationsComponent},{path:'ajouterlocation',component:AjouterlocationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
