import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TodoAddEdit } from './todo-add-edit/todo-add-edit';

/**
 * @title Toolbar overview
 */

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todos_ui');
  protected readonly dialog = inject(MatDialog);

  openAddEditTodoForm() {
    this.dialog.open(TodoAddEdit);
  }
}