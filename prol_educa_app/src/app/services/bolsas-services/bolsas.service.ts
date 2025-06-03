import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root',
})
export class BolsasService {
  private dataUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

getBolsas(): Observable<any[]> {
  return this.http.get<any[]>(`${this.dataUrl}/scholars`);
}

  getInstituicoes(): Observable<string[]> {
    return this.getBolsas().pipe(
      map((bolsas) => [...new Set(bolsas.map((b) => b.instituicao))])
    );
  }

  getEstados(): Observable<string[]> {
    return this.getBolsas().pipe(
      map((bolsas) => [...new Set(bolsas.map((b) => b.estado))])
    );
  }

  getCidades(): Observable<string[]> {
    return this.getBolsas().pipe(
      map((bolsas) => [...new Set(bolsas.map((b) => b.cidade))])
    );
  }
  getBairros(): Observable<string[]> {
    return this.getBolsas().pipe(
      map((bolsas) => [...new Set(bolsas.map((b) => b.bairro))])
    );
  }

  getCursos(): Observable<string[]> {
    return this.getBolsas().pipe(
      map((bolsas) => [...new Set(bolsas.map((b) => b.curso))])
    );
  }
  getModalidade(): Observable<string[]> {
    return this.getBolsas().pipe(
      map((bolsas) => [...new Set(bolsas.map((b) => b.modalidade))])
    );
  }


}
