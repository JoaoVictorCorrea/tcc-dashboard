import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypesViolenceSituations } from '../models/types-violence-situations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesViolenceSituationsService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://1wyaory04g.execute-api.us-east-1.amazonaws.com/query2";

  getTypesViolenceSituations(): Observable<TypesViolenceSituations[]>{

    return this.http.get<TypesViolenceSituations[]>(this.baseUrl);
  }
}
