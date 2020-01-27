import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouterclient.component.html',
  styleUrls: ['./ajouterclient.component.css']
})
export class AjouterclientComponent implements OnInit {

  constructor(private service: Service, private router: Router, private route: ActivatedRoute) { }
  
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
  page;
  client;
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)

    if(this.id==undefined){
      //formulaire add
      this.service.getLastIdClient().subscribe(data =>{
        this.id=data;
      })
      
    }else{
      //formulaire update
      this.service.getClientById(this.id).subscribe(data =>{
        this.client=data;
        console.log(this.client)
        this.registerForm.controls["cin"].setValue(this.client.ncin);
        this.registerForm.controls["nom"].setValue(this.client.nom);
        this.registerForm.controls["prenom"].setValue(this.client.prenom);
        this.registerForm.controls["numpermis"].setValue(this.client.numPermis);
        this.registerForm.controls["dateNaissance"].setValue(this.client.dateNaissance);
        this.registerForm.controls["adresse"].setValue(this.client.adresse);
      })

    }
  }
  onSubmit(){

      this.client = {id: this.id,
        ncin: this.registerForm.value["cin"],
        nom: this.registerForm.value["nom"],
        prenom: this.registerForm.value["prenom"],
        numPermis: this.registerForm.value["numpermis"],
        dateNaissance: this.registerForm.value["dateNaissance"],
        adresse: this.registerForm.value["adresse"]}

  this.service.ajouterClient(this.client).subscribe(data =>{
  })
  
  this.router.navigate(['clients/listeclients']);

}

}
