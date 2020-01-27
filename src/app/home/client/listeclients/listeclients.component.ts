import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.css']
})
export class ListeclientsComponent implements OnInit {

  constructor(private service: Service,private router: Router) { }

  list;
  ngOnInit() {
    this.service.getClients().subscribe(data =>{
    this.list=data;
    console.log(this.list)
  })
  }

  delete(id){
    this.service.deleteClient(id).subscribe(data =>{
    })
    this.ngOnInit()
  }

  update(id){
    this.router.navigate(['/clients/modifierclient',id])
  }

}
