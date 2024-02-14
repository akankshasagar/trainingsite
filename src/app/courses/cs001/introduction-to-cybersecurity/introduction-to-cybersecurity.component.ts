import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-introduction-to-cybersecurity',
  templateUrl: './introduction-to-cybersecurity.component.html',
  styleUrls: ['./introduction-to-cybersecurity.component.css']
})
export class IntroductionToCybersecurityComponent {

  isCompleted: boolean = false;

  // markAsCompleted() {
  //   // Implement your logic here to mark the content as completed
  //   // For example, you can make an API call to update the status of completion
  //   this.isCompleted = true; // Update the property to true when the button is clicked
  // }

  constructor(private auth: AuthService, private http: HttpClient, private toastr: ToastrService) { }

  completed(email: string, course: string) {
    // this.http.post<any>('https://localhost:7243/api/CourseEnrollments', { course })
    this.isCompleted = true;
    this.auth.complete(email, course)
      .subscribe({
        next: (response)  => {
          // console.log('Enrollment successful', response);
          // Handle success (e.g., show a success message)
          this.toastr.success(response.message);
        },
        error: (error) => {
          // console.error('Error occurred during enrollment', error);
          this.toastr.error(error?.error.message);
          // Handle error (e.g., show an error message)
        }
      });
  }

}
