// user-form.component.ts
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule, MatCardModule, MatSnackBarModule, RouterLink],
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  name: string;
  email: string;
  phone: string;

  constructor(private appService: AppService, private snackBar: MatSnackBar) {
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  onSubmit() {
    if (!this.name || !this.email) {
      console.log('Nome e email são obrigatórios');
      return;
    }

    this.appService.saveUser({ name: this.name, email: this.email, phone: this.phone });
    this.name = '';
    this.email = '';
    this.phone = '';

    this.snackBar.open('Salvo com sucesso', '', {
      duration: 2000,
    });
  }

  numberOnly(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

  }
}
