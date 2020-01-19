import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  /*Objeto contenedor del endpoint */
  numero: number = 300
  private endpoint: any = {
    comic: `https://xkcd.com/info.0.json`
  }
  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  /*Servicios de la aplicacion */

  listOfComics() {
    let headers: HttpHeaders = new HttpHeaders()
    .set(
      "Content-Type",
      "application/json"
    );
    return this.http.get(this.endpoint.comic, { headers: headers })
  }


}
