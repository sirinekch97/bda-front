import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'


const routes: Routes = [{path:'',component:HomeComponent,
children:[{path:'voitures',loadChildren:'./home/voiture/voiture.module#VoitureModule'},
{path:'clients',loadChildren:'./home/client/client.module#ClientModule'},
{path:'locations',loadChildren:'./home/location/location.module#LocationModule'},
{path:'bilan',loadChildren:'./home/bilan/bilan.module#BilanModule'}]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
