import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';
interface RegisterBody {
  name: string;
  email: string;
  password: string;
}
@Injectable({
providedIn: 'root'
})
export class LoginService {

private apiBaseUrl = environment.apiUrl;


constructor(private http: HttpClient) {}

login(data: { email: string; password: string }): Observable<{ access_token: string }> {
const url = `${this.apiBaseUrl}/auth/login`;
return this.http.post<{ access_token: string }>(url, data);
}

 registerUser(body: RegisterBody): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/auth/register`, body);
  }

}