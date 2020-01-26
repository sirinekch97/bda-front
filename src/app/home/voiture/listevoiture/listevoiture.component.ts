import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listevoiture',
  templateUrl: './listevoiture.component.html',
  styleUrls: ['./listevoiture.component.css']
})
export class ListeVoitureComponent implements OnInit {

  constructor(private service: Service) { }

  list;
  ngOnInit() {
    this.service.getVoitures().subscribe(data =>{
    this.list=data;
    console.log(this.list)
  })
  }

  delete(id){
    console.log("12")
    this.service.deleteVoiture(id).subscribe(data =>{
      console.log("13")
    })
    this.ngOnInit()
  }

}
