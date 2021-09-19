import { Injectable } from '@angular/core';
import { UrlsEnum } from '../../enums/urls.enum';
import { ApiKeyEnum } from '../../enums/api-key.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/apiResponse';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  private url: String = UrlsEnum.moviesApi + '?api_key=' + ApiKeyEnum.theMovieDb;
  private urlEnd: String = '&page=1&include_adult=false';

  constructor (private httpClient: HttpClient) {
  }

  public searchMovie (query: String): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${ this.url }&query=${ query }${ this.urlEnd }`);
  }
}
