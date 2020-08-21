import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

url = `${environment.baseUrl}/professor`;  

constructor(private http: HttpClient) { }

  getAll(): Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.url}`);
  }

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.url}/${id}`);
  }

  post(professor: Professor) {
    return this.http.post(`${this.url}`, professor);
  }

  put(professor: Professor) {
    return this.http.put(`${this.url}/${professor.id}`, professor);
  }

  delete(id: number){
    return this.http.get<Professor>(`${this.url}/${id}`);
  }
}
