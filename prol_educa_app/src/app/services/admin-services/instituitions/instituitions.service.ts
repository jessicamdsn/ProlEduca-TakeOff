import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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

  private apiUrl = 'http://localhost:3001/institutions'

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
