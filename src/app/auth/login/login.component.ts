import { Component } from '@angular/core';
import { LoginService } from '../utils-auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }
  login() {
    this.loginService.login().subscribe(data=>{
      console.log(data)
    })
  }
}
