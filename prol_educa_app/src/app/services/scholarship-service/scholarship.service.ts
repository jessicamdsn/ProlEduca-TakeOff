// scholarship-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  private apiUrl = 'http://localhost:3000/api/cliente';


  constructor(private http: HttpClient) {}

  cadastrarCliente(clienteData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clienteData);
  }
}