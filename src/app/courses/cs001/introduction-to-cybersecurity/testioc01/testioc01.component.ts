import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormanswersService } from 'src/app/services/formanswers.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-testioc01',
  templateUrl: './testioc01.component.html',
  styleUrls: ['./testioc01.component.css']
})
export class Testioc01Component {

  submitted: boolean = false;
  start: boolean = false;
  model: any = {
    email: '', // Initialize model properties
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  };

  constructor(private http: HttpClient, private auth: AuthService, private toastr: ToastrService, private router: Router) {     
    this.submitted = localStorage.getItem('formSubmitted') === 'true';
  }

  submitForm() { //working
    // Assuming your model is properly populated with user selections
    // console.log('Submitting form:', this.model);
    this.submitted = true;
    this.start = false;
    localStorage.setItem('formSubmitted', 'true'); 
    this.auth.submitForm(this.model).subscribe({
      next: (response) => {
        // console.log('Submission successful:', response);   
        this.toastr.success(response.message);                
      },
      error: (error) => {
        // console.error('Error submitting form:', error);
        this.toastr.error(error?.error.message);      
      }
    });
  }

  Start(){
    this.start = true;
  }

  closeCard() {
    this.start = false;
  }
}