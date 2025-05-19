import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  apiBaseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createNewAdm(name: string, email:string, password:string): Observable<any> {
    const body = {
      name: name,
      email: email,
      password: password
    };

    // return this.http.post(this.apiUrl, body);
    const url = `${this.apiBaseUrl}/administrators`;
    return this.http.post<any>(url , body);
  }

  getAdmins() {
    const url = `${this.apiBaseUrl}/administrators`;
    console.log('Requisição para:', url);
    return this.http.get<any>(url);
  }

}
