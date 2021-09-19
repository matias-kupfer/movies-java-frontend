import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor (private httpClient: HttpClient) {
  }

  public getData () {
    return this.httpClient.get('http://localhost:8080/api/users');
  }
}
