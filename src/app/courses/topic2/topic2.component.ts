import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-topic2',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './topic2.component.html',
  styleUrl: './topic2.component.css'
})
export class Topic2Component {
  questions = [
    {
      text: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London'],
      selectedOption: null
    },
    {
      text: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter'],
      selectedOption: null
    },
    {
      text: 'Who developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei'],
      selectedOption: null
    }
  ];

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.questions);
  }
}
