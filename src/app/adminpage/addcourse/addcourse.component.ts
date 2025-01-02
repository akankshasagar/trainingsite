import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  userRole: string | null = null;
  constructor(private auth: AuthService, private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    const tokenPayload = this.auth.decodeToken();
    this.userRole = tokenPayload?.role || null; // Fetch user role from decoded token
  }

  logout() {
    this.auth.signOut();
  }

}
