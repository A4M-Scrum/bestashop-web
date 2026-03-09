import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginService } from '../../services/login.service';

import { Theme } from '../theme/theme';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    Theme,
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
