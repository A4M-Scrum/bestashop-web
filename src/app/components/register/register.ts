import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name: string = '';
  email: string = '';

  message: string = '';
  isError: boolean = false;

  constructor(private registerService: RegisterService) { }

  onSubmit(): void {

    if (!this.name || !this.email) {
      this.message = 'Todos los campos son obligatorios';
      this.isError = true;
      return;
    }

    const result = this.registerService.register({
      name: this.name,
      email: this.email
    });

    if (!result) {
      this.message = 'El correo ya está registrado';
      this.isError = true;
      return;
    }

    this.message = 'Usuario registrado correctamente';
    this.isError = false;

    this.name = '';
    this.email = '';
  }
}
