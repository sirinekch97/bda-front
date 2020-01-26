import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouterclient.component.html',
  styleUrls: ['./ajouterclient.component.css']
})
export class AjouterclientComponent implements OnInit {

  constructor(private service: Service, private router: Router) { }

  registerForm = new FormGroup({
    cin: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    numpermis: new FormControl(''),
    dateNaissance: new FormControl(''),
    adresse: new FormControl('')
  });

  id;
  submitted;
  ngOnInit() {
    this.service.getLastIdClient().subscribe(data =>{
      this.id=data;
    })
  }
  onSubmit(){
    var client = {id: this.id,
      ncin: this.registerForm.value["cin"],
      nom: this.registerForm.value["nom"],
      prenom: this.registerForm.value["prenom"],
      numPermis: this.registerForm.value["numpermis"],
      dateNaissance: this.registerForm.value["dateNaissance"],
      adresse: this.registerForm.value["adresse"]}
this.service.ajouterClient(client).subscribe(data =>{
  
})

this.router.navigate(['clients/listeclients']);
  }


}
