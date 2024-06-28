import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViolenceSituationsTypes } from '../models/violence-situations-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViolenceSituationsTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://1wyaory04g.execute-api.us-east-1.amazonaws.com/query2";

  getViolenceSituationsTypes(): Observable<ViolenceSituationsTypes[]>{

    return this.http.get<ViolenceSituationsTypes[]>(this.baseUrl);
  }
}
