import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajoutervoiture',
  templateUrl: './ajoutervoiture.component.html',
  styleUrls: ['./ajoutervoiture.component.css']
})
export class AjoutervoitureComponent implements OnInit {

  constructor(private service: Service, private router: Router, private route: ActivatedRoute) { }

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
  voiture;
  ngOnInit() {

    this.id = this.route.snapshot.params.id;
    console.log(this.id)

    if(this.id==undefined){
      //formulaire add
      this.service.getLastId().subscribe(data =>{
        this.id=data;
      })

    }else{
      //formulaire update
      this.service.getVoitureById(this.id).subscribe(data =>{
        this.voiture=data;
        console.log(this.voiture)
        this.registerForm.controls["Numimmat"].setValue(this.voiture.numImmatriculion);
        this.registerForm.controls["marque"].setValue(this.voiture.marque);
        this.registerForm.controls["Modele"].setValue(this.voiture.modele);
        this.registerForm.controls["price"].setValue(this.voiture.prixLoc);
        this.registerForm.controls["numChassis"].setValue(this.voiture.numChassis);
        this.registerForm.controls["puissanceFiscale"].setValue(this.voiture.puissanceFiscale);
        this.registerForm.controls["nbCylindre"].setValue(this.voiture.nbCylindre);
        this.registerForm.controls["datepicker1"].setValue(this.voiture.dateCirculation);
      })

    }
  }

  onSubmit(){
    this.voiture = {id: this.id,
               numImmatriculion: this.registerForm.value["Numimmat"],
               marque: this.registerForm.value["marque"],
               modele: this.registerForm.value["Modele"],
               prixLoc: this.registerForm.value["price"],
               numChassis: this.registerForm.value["numChassis"],
               puissanceFiscale: this.registerForm.value["puissanceFiscale"],
               nbCylindre: this.registerForm.value["nbCylindre"],
               dateCirculation: this.registerForm.value["datepicker1"]}
    this.service.ajouterVoiture(this.voiture).subscribe(data =>{
      
    })
    this.router.navigate(['voitures/listevoitures']);
  }

  

}
