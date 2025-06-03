// scholarship-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {}

  cadastrarCliente(clienteData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clienteData);
  }
}