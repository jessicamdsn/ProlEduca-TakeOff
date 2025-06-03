import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroment';


export interface Institution {
  trackingId: string;
  name: string;
  status: boolean;
  type: string;
  courses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class InstituitionsService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  getInstitutions(): Observable<Institution[]>{
    return this.http.get<Institution[]>(this.apiUrl);
  }

  updateInstitutions(instituition: Institution){
    return this.http.put(`${this.apiUrl}/${instituition.trackingId}`, instituition);
  }

  deleteInstituition(trackingId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
