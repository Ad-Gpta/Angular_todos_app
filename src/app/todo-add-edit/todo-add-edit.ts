import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-add-edit',
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './todo-add-edit.html',
  styleUrl: './todo-add-edit.css'
})
export class TodoAddEdit {

}
