import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroment';

export interface Course {
  trackingId: string;
  nome: string;
  codInstituicao: string;
  vagas: number;
  percentualBolsa: number;
  valorOriginal: number;
  valorDesconto: number;
  turno: string;
  anoBolsa: number;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  updateCourse(course: Course) {
    return this.http.put(`${this.apiUrl}/${course.trackingId}`, course);
  }

  deleteCourse(trackingId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
