import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroment';

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

  private apiUrl = environment.apiUrl;

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  updateUser(user: User) {
    return this.http.put(`${this.apiUrl}/alunos/${user.trackingId}`, user);
  }


  deleteUser(trackingId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }


  apiBaseUrl: string = environment.apiUrl;
  
    getUsers() {
      const url = `${this.apiBaseUrl}/clients`;
      console.log('Requisição para:', url);
      return this.http.get<any>(url);
    }
}
