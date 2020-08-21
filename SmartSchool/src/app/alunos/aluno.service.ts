import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

url = `${environment.baseUrl}/aluno`;  

constructor(private http: HttpClient) { }

  getAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(`${this.url}`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.url}/${id}`);
  }

  post(aluno: Aluno) {
    return this.http.post(`${this.url}`, aluno);
  }

  put(aluno: Aluno) {
    return this.http.put(`${this.url}/${aluno.id}`, aluno);
  }

  delete(id: number){
    return this.http.delete<Aluno>(`${this.url}/${id}`);
  }
}
