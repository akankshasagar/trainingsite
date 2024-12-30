import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {

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
