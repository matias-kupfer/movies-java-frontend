import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UrlsEnum } from '../../enums/urls.enum';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private httpClient: HttpClient) { }

  public login (): Observable<HttpResponse<Object>> {
    return this.httpClient.post(UrlsEnum.backendUrl + UrlsEnum.loginEndpoint, {
      username: 'qwerty',
      password: 'qwerty'
    }, {observe: 'response'});
  }

  public signUp (): Observable<Object> {
    return this.httpClient.post(UrlsEnum.backendApiEndpoint + UrlsEnum.registerEndpoint, {
      'firstName': 'John',
      'lastName': 'Doe',
      'email': 'qwerty',
      'password': 'qwerty'
    });
  }
}
