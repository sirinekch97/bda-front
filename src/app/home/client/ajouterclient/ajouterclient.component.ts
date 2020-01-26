import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouterclient.component.html',
  styleUrls: ['./ajouterclient.component.css']
})
export class AjouterclientComponent implements OnInit {

  constructor(private service: Service) { }

  registerForm = new FormGroup({
    cin: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    numpermis: new FormControl(''),
    dateNaissance: new FormControl(''),
    adresse: new FormControl('')
  });

  ngOnInit() {
  }
  onSubmit(){
    this.service.ajouterClient(this.registerForm.value).subscribe(data =>{
      
    })
    console.log(this.registerForm.value);
  }


}
