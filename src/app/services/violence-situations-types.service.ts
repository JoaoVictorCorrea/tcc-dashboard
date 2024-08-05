import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViolenceSituationsTypes } from '../models/violence-situations-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViolenceSituationsTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/violence-situations-types"

  getViolenceSituationsTypes(): Observable<ViolenceSituationsTypes[]>{

    return this.http.get<ViolenceSituationsTypes[]>(this.baseUrl);
  }
}
