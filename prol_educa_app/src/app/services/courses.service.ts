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

    getCourses() {
      const url = `${this.apiBaseUrl}/courses`;
      return this.http.get<any>(url);
    }
  
    createNewCourse(formData: any): Observable<any> {
      const body = {
        institution_id: formData.instituicaoAssociada,
        name: formData.nome,      
        vacancies: formData.vagas, 
        scholarship_percentage: formData.bolsaPercentual,
        original_price: formData.valorOriginal,
        discounted_price: formData.valorDesconto
        ,
        shift: formData.turno,
        // image_url: formData.image_url,
        enrollment_discount: formData.descontoEntrada,
        is_active: formData.status
      };
  
      // return this.http.post(this.apiUrl, body);
      const url = `${this.apiBaseUrl}/courses`;
      return this.http.post<any>(url, body);
    }
}

