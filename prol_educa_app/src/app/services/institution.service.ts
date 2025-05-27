import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  apiBaseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createNewInstitution(formData: any): Observable<any> {
    const body = {
      trade_name: formData.razaoSocial,
      street: formData.rua,
      number: formData.numero,
      complement: formData.complemento || null,
      district: 'Centro', // Você pode ajustar isso para um campo específico se quiser
      city: formData.cidade,
      state: formData.estado,
      postal_code: formData.cep,
      manager_name: formData.nomeResponsavel,
      manager_phone: formData.telefoneResponsavel,
      manager_email: formData.emailResponsavel,
      type: formData.tipo,
      image_url: null, // Adicione o caminho da imagem se estiver usando upload
      password: formData.senhaResponsavel,
      is_active: true // ou baseado em formData.status, se for booleano
    };

    // return this.http.post(this.apiUrl, body);
    const url = `${this.apiBaseUrl}/institutions`;
    return this.http.post<any>(url, body);
  }

  getInstitutions() {
    const url = `${this.apiBaseUrl}/institutions`;
    console.log('Requisição para:', url);
    return this.http.get<any>(url);
  }
}
