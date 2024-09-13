import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:10101/api/register'; 

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { email, username, pass: password });
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
