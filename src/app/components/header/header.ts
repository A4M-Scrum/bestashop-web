import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from '../../services/login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public loginService: LoginService) { }

  get currentUser() {
    return this.loginService.getCurrentUser();
  }
}
