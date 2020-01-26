import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-listelocations',
  templateUrl: './listelocations.component.html',
  styleUrls: ['./listelocations.component.css']
})
export class ListelocationsComponent implements OnInit {

  constructor(private service: Service) { }

  list;
  ngOnInit() {
    this.service.getLocations().subscribe(data =>{
    this.list=data;
    console.log(this.list)
  })
  }

  delete(id){
    this.service.deleteLocations(id).subscribe(data =>{
    })
    this.ngOnInit()
  }

}
