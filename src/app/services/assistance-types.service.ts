import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistanceTypes } from '../models/assistance-types';

@Injectable({
  providedIn: 'root'
})
export class AssistanceTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://pvmgu2uv58.execute-api.us-east-1.amazonaws.com/AssistanceTypesLambda"

  getAssistanceTypes(): Observable<AssistanceTypes[]>{

    return this.http.get<AssistanceTypes[]>(this.baseUrl);
  }
}