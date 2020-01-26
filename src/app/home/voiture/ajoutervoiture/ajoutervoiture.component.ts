import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-ajoutervoiture',
  templateUrl: './ajoutervoiture.component.html',
  styleUrls: ['./ajoutervoiture.component.css']
})
export class AjoutervoitureComponent implements OnInit {

  constructor(private service: Service) { }

  registerForm = new FormGroup({
    nom: new FormControl(''),
    marque: new FormControl(''),
    Modele: new FormControl(''),
    price: new FormControl(''),
    numChassis: new FormControl(''),
    puissanceFiscale: new FormControl(''),
    nbCylindre: new FormControl(''),
    datepicker1: new FormControl('')
  });

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
               modele: this.registerForm.value["modele"],
               prixLoc: this.registerForm.value["price"],
               numChassis: this.registerForm.value["numChassis"],
               puissanceFiscale: this.registerForm.value["puissanceFiscale"],
               nbCylindre: this.registerForm.value["nbCylindre"],
               datepicker1: this.registerForm.value["datepicker1"]}
    this.service.ajouterVoiture(voiture).subscribe(data =>{
      
    })
    console.log(this.registerForm.value);
  }

}
