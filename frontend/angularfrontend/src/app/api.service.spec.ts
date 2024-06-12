import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Model APIs
  getModels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/models`);
  }

  createModel(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/models`, model);
  }

  // Entity APIs
  getEntities(modelId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/entities/${modelId}`);
  }

  createEntity(entity: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/entities`, entity);
  }

  // Entity Data APIs
  getEntityData(entityId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/entity_data/${entityId}`);
  }

  createEntityData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/entity_data`, data);
  }
}
