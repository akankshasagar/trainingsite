import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
  showForm: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when loading is complete
    }, 200); //2000
  }

  navigateToQuiz() {
    window.open('/courses/topic1/onlinetest1', '_blank');
  }

  // takeTest(): void {
  //   setTimeout(() => {
  //     this.showForm = true;
  //   }, 2000);
  // }

}
