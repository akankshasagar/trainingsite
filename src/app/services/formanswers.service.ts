import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormanswersService {

  baseUrl = 'https://localhost:7243/api/TestAnswers01'; // Your API URL

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any>  {    
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  // signUp(request: any) {
  //   return this.http.post<any>(`${this.baseUrl}registercustomer`, request)
  // }
}
