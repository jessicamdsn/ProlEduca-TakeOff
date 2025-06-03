import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/users.service';
import { environment } from '../../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

  constructor(private http: HttpClient, ) { }

  private apiUrl = environment.apiUrl;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  updateUser(user: User) {
    return this.http.put(`${this.apiUrl}/${user.trackingId}`, user);
  }


  deleteUser(trackingId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
