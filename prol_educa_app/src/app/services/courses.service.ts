import { Injectable } from '@angular/core';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

    apiBaseUrl: string = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    createNewAdm(name: string, email:string, password:string): Observable<any> {
      const body = {
        name: name,
        email: email,
        password: password
      };
  
      // return this.http.post(this.apiUrl, body);
      const url = `${this.apiBaseUrl}/courses`;
      return this.http.post<any>(url , body);
    }
}

