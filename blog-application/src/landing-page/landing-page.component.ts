import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { BodyComponent } from '../body/body.component';
import { LoggedInBodyComponent } from '../logged-in-body/logged-in-body.component';
import { NavComponent } from '../nav/nav.component';
import { LoginService } from '../login.service';
import { FormsModule, NgForm } from '@angular/forms';
import { LogoutComponent } from '../logout/logout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, LoginComponent, BodyComponent, LoggedInBodyComponent, NavComponent, FormsModule, LogoutComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isLoggedIn: boolean = false;
  wantsToLogin: boolean = false;

  @ViewChild('form')loginData ?: NgForm

  isUseridInvalid: boolean | undefined = this.invalidId;
  isPasswordinvalid: boolean | undefined = this.invalidPassword;

  get invalidId(){
    return this.loginData?.form.controls['username'].touched && this.loginData.form.controls['username'].dirty && this.loginData.form.controls['username'].invalid
  }

  get invalidPassword() {
    return this.loginData?.form.controls['password'].touched && this.loginData.controls['password'].dirty && this.loginData.form.controls['password'].invalid
  }

  private loginService = inject(LoginService)
  username: string = '';
  password: string = '';

  onLoginClick(){
    this.wantsToLogin = !this.wantsToLogin;
  }

  onLogoutClick(){
    this.isLoggedIn = false;
  }

  onLogin(){
    const authSuccess = this.loginService.authenticate(this.loginData?.value.username, this.loginData?.value.password)
    if(authSuccess){
      this.isLoggedIn = true;
      this.wantsToLogin = false;
    }
    else{
      this.isLoggedIn = false;
      this.wantsToLogin = false;
    }
  }
}
