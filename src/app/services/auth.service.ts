import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7243/api/User/";
  private ansapiurl: string = "https://localhost:7243/api/TestAnswers01";
  private courseurl: string = "https://localhost:7243/api/CourseEnrollments";
  private coursecompl: string = "https://localhost:7243/api/CoursesCompleted";
  // private test01: string = ""
  private userPayload: any;

  constructor(private http: HttpClient, private router: Router){
    this.userPayload = this.decodeToken();
  }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}Register`, userObj);
  }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['homepage']);
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }  

  decodeToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    // console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getFullNameFromToken() {
    if (this.userPayload)
      return this.userPayload.name;
  }

  getEmailFromToken() {
    if (this.userPayload)
      return this.userPayload.email;
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post(`${this.ansapiurl}`, formData);
  }

  enroll(email: string, course: string){
    return this.http.post<any>(`${this.courseurl}?email= ${email.toString()}&course=${course.toString()}`, {email, course});
  }

  complete(email: string, course: string){
    return this.http.post<any>(`${this.coursecompl}?email= ${email.toString()}&course=${course.toString()}`, {email, course});
  }

  test01(email: string){
    return this.http.post<any>(`${this.ansapiurl}/test01?email= ${email.toString()}`, {email});
  }
}