import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnoucementComponent } from './annoucement/annoucement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AnnoucementComponent);
  }
}
