import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutervoiture',
  templateUrl: './ajoutervoiture.component.html',
  styleUrls: ['./ajoutervoiture.component.css']
})
export class AjoutervoitureComponent implements OnInit {

  constructor(private service: Service, private router: Router) { }

  registerForm = new FormGroup({
    Numimmat: new FormControl(''),
    marque: new FormControl(''),
    Modele: new FormControl(''),
    price: new FormControl(''),
    numChassis: new FormControl(''),
    puissanceFiscale: new FormControl(''),
    nbCylindre: new FormControl(''),
    datepicker1: new FormControl('')
  });
  submitted;
  id;
  ngOnInit() {
    this.service.getLastId().subscribe(data =>{
      this.id=data;
    })
  }
  onSubmit(){
    var voiture = {id: this.id,
               numImmatriculion: this.registerForm.value["Numimmat"],
               marque: this.registerForm.value["marque"],
               modele: this.registerForm.value["Modele"],
               prixLoc: this.registerForm.value["price"],
               numChassis: this.registerForm.value["numChassis"],
               puissanceFiscale: this.registerForm.value["puissanceFiscale"],
               nbCylindre: this.registerForm.value["nbCylindre"],
               dateCirculation: this.registerForm.value["datepicker1"]}
    this.service.ajouterVoiture(voiture).subscribe(data =>{
      
    })

    console.log(this.registerForm.value["datepicker1"])
    this.router.navigate(['voitures/listevoitures']);
  }
  

}
