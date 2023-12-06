import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Topic2Component } from './courses/topic2/topic2.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(Topic2Component, {
      width: '300vh', // Adjust the width as needed
    });

    // Subscribe to the afterClosed observable to perform actions after the popup is closed
    dialogRef.afterClosed().subscribe(() => {
      console.log('Popup closed');
      // You can perform additional actions after the popup is closed if needed
    });
  }

}
