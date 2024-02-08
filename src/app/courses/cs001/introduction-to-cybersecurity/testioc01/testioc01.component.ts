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

  model: any = {
    email: '', // Initialize model properties
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  };

  constructor(private http: HttpClient, private auth: AuthService) { 
    // const loggedInUser = this.auth.isLoggedIn();
    // if(loggedInUser) {
    //   this.model.email = loggedInUser.email;
    // }
  }

  // submitForm() {
  //   // Assuming your model is properly populated with user selections
  //   console.log('Submitting form:', this.model);
  //   this.auth.submitForm(this.model).subscribe({
  //     next: (response) => {
  //       console.log('Submission successful:', response);
  //     },
  //     error: (error) => {
  //       console.error('Error submitting form:', error);
  //     }
  //   });
  // }

  submitForm() {
    console.log('Submitting form:', this.model);  //Data getting passed
    this.http.post('https://localhost:7243/api/TestAnswers01', this.model)
      .subscribe({ next: (response) => {
        console.log('Form submitted successfully', response);
      }, error: (error) => {
        console.error('Error submitting form:', error);
      }
    });
  }


//   submitForm(): void {
//     console.log('Submitting form:', this.model);
//     this.auth.submitForm2(this.model);
// }



  // formData: any = {
  //   email: '',
  //   q1: '',
  //   q2: '',
  //   q3: '',
  //   q4: '',
  //   q5: ''
  // };

  // constructor(private authService: AuthService, private formService: FormanswersService) { 
  //   this.fetchUserEmail();
  // }

  // fetchUserEmail() {
  //   // Call your authentication service to fetch user details
  //   const user = this.authService.getEmailFromToken();
  //   if (user && user.email) {
  //     this.formData.email = user.email; // Populate email field with user's email
  //   }
  // }

  // submitForm() {
  //   this.formService.submitForm(this.formData)
  //     .subscribe(
  //       response => {
  //         console.log('Form submitted successfully', response);
  //         // Optionally, reset the form data here
  //         this.formData = {
  //           email: '',
  //           q1: '',
  //           q2: '',
  //           q3: '',
  //           q4: '',
  //           q5: ''
  //         };
  //       },
  //       error => {
  //         console.error('Error submitting form', error);
  //         // Handle error as needed
  //       }
  //     );
  //     }
}