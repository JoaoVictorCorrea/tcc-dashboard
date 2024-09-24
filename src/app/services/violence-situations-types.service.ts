import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViolenceSituationsTypes } from '../models/violence-situations-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViolenceSituationsTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://a6tg399ay5.execute-api.us-east-1.amazonaws.com/violenceSituationsTypesLambda"

  getViolenceSituationsTypes(): Observable<ViolenceSituationsTypes[]>{

    return this.http.get<ViolenceSituationsTypes[]>(this.baseUrl);
  }
}