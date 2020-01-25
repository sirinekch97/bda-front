import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeclientsComponent} from './listeclients/listeclients.component';
import {AjouterclientComponent} from './ajouterclient/ajouterclient.component'




const routes: Routes = [{path:'listeclients',component:ListeclientsComponent},{path:'ajouterclient',component:AjouterclientComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
