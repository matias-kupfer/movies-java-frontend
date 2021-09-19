import { Component } from '@angular/core';
import { MoviesApiService } from './core/services/movies-api.service';
import { DataService } from './core/services/data.service';
import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-java';

  constructor (private dataService: DataService, public authService: AuthService) {
  }

  public getData () {
    this.dataService.getData().subscribe((r) => {
      console.log('GET DATA AT LOGIN COMPONENT -- - - - - - - - - - - - - - -- - -- - - - -- - - -- -');
      console.log(r);
    });
  }
}
