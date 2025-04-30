import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User{
  trackingId: string;
  nome: string;
  cpf: string;
  email: string;
  contato: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, ) { }

  private apiUrl = 'http://localhost:3001/alunos';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  updateUser(user: User) {
    return this.http.put(`http://localhost:3001/alunos/${user.trackingId}`, user);
  }


  deleteUser(trackingId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
