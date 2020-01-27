import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  Url="http://localhost:8080/voiture";

  constructor(private http: HttpClient) { }

  getVoitures (): Observable<any> {
    return this.http.get<any>(this.Url+"/all")
  }

  getVoitureById(id): Observable<any> {
    return this.http.get<any>(this.Url+"/"+id)
  }
  
  deleteVoiture (id) : Observable<any> {
    return this.http.delete<any>(this.Url+"/delete/"+id)
  }

  ajouterVoiture(voiture): Observable<any> {
    return this.http.post<any>(this.Url+"/add",voiture)
  }

  getLastId(): Observable<any>{
    return this.http.get<any>(this.Url+"/lastId")
  }
  getNbVoitures(): Observable<any> {
    return this.http.get<any>(this.Url+"/nombreVoiture")
  }
  
  getPuissanteVoiture(): Observable<any> {
    return this.http.get<any>(this.Url+"/voiturePuissante")
  }
  getRentableVoiture(): Observable<any> {
    return this.http.get<any>(this.Url+"/voitureRentable")
  }
 
  /************************************* */
  Url2="http://localhost:8080/client";

  getClients(): Observable<any> {
    return this.http.get<any>(this.Url2+"/all")
  }

  getClientById(id): Observable<any> {
    return this.http.get<any>(this.Url2+"/"+id)
  }

  getNbClients(): Observable<any> {
    return this.http.get<any>(this.Url2+"/nombreClient")
  }
  

  deleteClient (id) : Observable<any> {
    return this.http.delete<any>(this.Url2+"/delete/"+id)
  }

  ajouterClient(client): Observable<any> {
    return this.http.post<any>(this.Url2+"/add",client)
  }
  getLastIdClient(): Observable<any>{
    return this.http.get<any>(this.Url2+"/lastId")
  }
  /************************************* */
  Url3="http://localhost:8080/location";

  getLocations(): Observable<any> {
    return this.http.get<any>(this.Url3+"/all")
  }

  deleteLocations (id) : Observable<any> {
    return this.http.delete<any>(this.Url3+"/delete/"+id)
  }

  ajouterLocation(Numimmat,cin,location): Observable<any> {
    return this.http.post<any>(this.Url3+"/add/"+Numimmat+"/"+cin,location)
  }
  getLastIdLocation(): Observable<any>{
    return this.http.get<any>(this.Url3+"/lastId")
  }
  getNbLocations(): Observable<any> {
    return this.http.get<any>(this.Url3+"/nombreLocation")
  }
  getLongDuree(): Observable<any> {
    return this.http.get<any>(this.Url3+"/longDuree")
  } 
  getMaxVoitureParLoc(): Observable<any> {
    return this.http.get<any>(this.Url3+"/maxLocVoiture")
  }  
  getMaxClientFidele(): Observable<any> {
    return this.http.get<any>(this.Url3+"/maxClientFidele")
  }
  getMaxDureeLoc(): Observable<any> {
    return this.http.get<any>(this.Url3+"/maxDureeLoc")
  }
 

  
}
