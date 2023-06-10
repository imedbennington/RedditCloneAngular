import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http: HttpClient) { }
  signup(signrequestpayload: SignupRequestPayload): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signup', signrequestpayload, {responseType:'text'});
  }
  }
