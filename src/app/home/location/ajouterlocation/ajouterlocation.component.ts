import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterlocation',
  templateUrl: './ajouterlocation.component.html',
  styleUrls: ['./ajouterlocation.component.css']
})
export class AjouterlocationComponent implements OnInit {

  next;
  idClient;
  idVoiture;

  constructor(private service: Service, private router: Router) { }

  registerForm = new FormGroup({
    cin: new FormControl(''),
    Numimmat: new FormControl('')
  });

  registerForm2 = new FormGroup({
    datedeb: new FormControl(''),
    datefin: new FormControl(''),
    montant: new FormControl(''),
    promotion: new FormControl('')
  });

  id;
  clients;
  voitures;
  ngOnInit() {
    this.next=false;
    this.service.getLastIdLocation().subscribe(data =>{
      this.id=data;
    })
    this.service.getClients().subscribe(data =>{
      this.clients=data;
    })
    this.service.getVoitures().subscribe(data =>{
      this.voitures=data;
    })
  }
  onSubmit(){
    this.idClient = this.registerForm.value["cin"];
    this.idVoiture = this.registerForm.value["Numimmat"]
    this.next=true;
  }

  onSubmit2(){
    var location = {id: this.id,
      date_deb: this.registerForm2.value["datedeb"],
      date_fin: this.registerForm2.value["datefin"],
      montant: this.registerForm2.value["montant"],
      promotion: this.registerForm2.value["promotion"]}
  this.service.ajouterLocation(this.idVoiture,this.idClient,location).subscribe(data =>{
  })

  console.log(this.registerForm2.value)
  this.router.navigate(['locations/listelocations']);
  
  }



}
