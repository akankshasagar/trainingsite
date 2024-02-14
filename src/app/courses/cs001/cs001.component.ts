import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserstoreService } from 'src/app/services/userstore.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cs001',
  templateUrl: './cs001.component.html',
  styleUrls: ['./cs001.component.css'],
  animations: [
    trigger('drawerAnimation', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CS001Component {
  drawerState = 'closed';
  public fullName: string = "";
  canNavigateToTypesOfFrauds: boolean = false;
  canNavigateToWaysToAvoidScams: boolean = false;

  constructor(private auth: AuthService, private userStore: UserstoreService, private router: Router, private toastr: ToastrService) { 
    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        let fullNameFromToken = this.auth.getFullNameFromToken();
        this.fullName = val || fullNameFromToken
      })
      // this.canNavigateToTypesOfFrauds = true;
      // this.canNavigateToWaysToAvoidScams = true;
  }

  CheckTest01(email: string) {
    // this.http.post<any>('https://localhost:7243/api/CourseEnrollments', { course })
    this.auth.test01(email)
      .subscribe({
        next: (response)  => {
          console.log('Test Already Submitted', response);
          this.router.navigate(['courses/cs001/types-of-frauds']);
          // Handle success (e.g., show a success message)
        },
        error: (error) => {
          // console.error('Give the Test of Previous Topic', error);
          this.toastr.error(error?.error.message);
          // Handle error (e.g., show an error message)
        }
      });
  }

  toggleDrawer() {
    this.drawerState = this.drawerState === 'closed' ? 'open' : 'closed';
  }

  logout(){
    this.auth.signOut();
  }
}
