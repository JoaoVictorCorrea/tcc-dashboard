import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViolenceSituationsTypes } from '../models/violence-situations-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViolenceSituationsTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://pvmgu2uv58.execute-api.us-east-1.amazonaws.com/ViolenceSituationTypesLambda"

  getViolenceSituationsTypes(year: string): Observable<ViolenceSituationsTypes[]>{
    const url = year !== 'Geral' ? `${this.baseUrl}?year=${year}` : this.baseUrl;
    return this.http.get<ViolenceSituationsTypes[]>(url);
  }
}