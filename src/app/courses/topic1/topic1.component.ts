import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topic1',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './topic1.component.html',
  styleUrl: './topic1.component.css'
})
export class Topic1Component {

  isLoading = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when loading is complete
    }, 2000);
  }
}
