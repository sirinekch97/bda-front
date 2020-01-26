import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';
@Component({
  selector: 'app-listebilan',
  templateUrl: './listebilan.component.html',
  styleUrls: ['./listebilan.component.css']
})
export class ListebilanComponent implements OnInit {

  constructor(private service: Service) { }

  nbvoiture : number;

  nbclient : number;
  nblocation : number;
  puissanteVoiture;
  rentableVoiture;  
  MaxLouee;
  ngOnInit() {
    this.service.getNbClients().subscribe(data =>{
    this.nbclient=data;
  })
  this.service.getNbVoitures().subscribe(data =>{
    this.nbvoiture=data;
  })
  this.service.getNbLocations().subscribe(data =>{
    this.nblocation=data;
  })
  this.service.getPuissanteVoiture().subscribe(data =>{
    this.puissanteVoiture=data;
  })
  this.service.getRentableVoiture().subscribe(data =>{
    this.rentableVoiture=data;
  })
  this.service.getLongDuree().subscribe(data =>{
    this.MaxLouee=data;
  })
  
  
  }

}
