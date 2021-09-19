import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { DefaultRoutes } from '../../../enums/default.routes';


@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor (private authService: AuthService, private router: Router) { }

  ngOnInit (): void {

  }

  public login (): void {
    this.authService.login().subscribe((r) => {
      localStorage.setItem('jwt', r.headers.get('Authorization')!);
      this.router.navigate([DefaultRoutes.onLoggedIn]);
    });
  }

  public signUp(): void {
    this.authService.signUp().subscribe(r => {
      console.log(r);
    });
  }
}
