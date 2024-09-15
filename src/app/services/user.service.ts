import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/puchase-order-app/api/users'; // Replace with your API URL
  username: any;
  password: any;

  constructor(private http: HttpClient) { }

   // Method to login the user
   loginUser(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
    
    
  }

  handleLogin(): any {
    this.http.post('/api/users/register', { username: this.username, password: this.password }).subscribe(() => {
     
      // Redirect to PO creation page
      window.location.href = '/po';
    }, (error) => {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    });
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/me`)
      .pipe(
        tap((response) => {
          console.log(`Retrieved user profile: ${response}`);
          return response;
        })
      );
  }

 

  // // Method to register a new user
  // registerUser(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.apiUrl}/register`, user);
  // }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/list`);
  }

   // Method to get user details by userid
   getUserById(user: Number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/id/${user}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createPO(po: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/purchase-orders`, po)
      .pipe(
        tap((response) => {
          console.log(`Created PO: ${response}`);
          return response;
        })
      );
  }

  
}