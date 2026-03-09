import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../../models/user.model';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  message: string = '';
  isError: boolean = false;
  currentUser: User | null = null;

  constructor(private loginService: LoginService) { }

  onSubmit(): void {

    if (!this.email) {
      this.message = 'El correo electrónico es obligatorio';
      this.isError = true;
      return;
    }

    const user = this.loginService.login(this.email);

    if (!user) {
      this.message = 'Usuario no registrado';
      this.isError = true;
      this.currentUser = null;
      return;
    }

    this.currentUser = user;
    this.message = `Bienvenido, ${user.name}`;
    this.isError = false;
    this.email = '';
  }

  logout(): void {
    this.loginService.logout();
    this.currentUser = null;
    this.message = '';
  }
}
