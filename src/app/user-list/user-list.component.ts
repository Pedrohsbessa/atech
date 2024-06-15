// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {DeleteUserDialogComponent} from "../delete-user-dialog/delete-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatAnchor, MatButton, RouterLink, MatSnackBarModule],
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private appService: AppService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.appService.getUsers();
  }
  openDialog(user: any) {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appService.deleteUser(user);
        this.getUsers();
        this.snackBar.open('Usuário deletado com sucesso!', '', {
          duration: 2000,
        });
      }
    });

  }
  openUpdateDialog(user: any) {
    const dialogRef = this.dialog.open(UpdateUserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appService.updateUser(user.id, result);
        this.getUsers();
      }
    });
  }
}
