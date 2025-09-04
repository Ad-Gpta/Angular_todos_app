import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-todo-add-edit',
  imports: [MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDatepickerModule],
  templateUrl: './todo-add-edit.html',
  styleUrl: './todo-add-edit.css',
  providers: [provideNativeDateAdapter()],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddEdit {
}
