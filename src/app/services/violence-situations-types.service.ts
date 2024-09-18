import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViolenceSituationsTypes } from '../models/violence-situations-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViolenceSituationsTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://ikdwdjpnpszynrlss3h7ri5lk40qprlo.lambda-url.us-east-1.on.aws/"

  getViolenceSituationsTypes(): Observable<ViolenceSituationsTypes[]>{

    return this.http.get<ViolenceSituationsTypes[]>(this.baseUrl);
  }
}
