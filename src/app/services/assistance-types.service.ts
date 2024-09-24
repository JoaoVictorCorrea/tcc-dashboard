import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistanceTypes } from '../models/assistance-types';

@Injectable({
  providedIn: 'root'
})
export class AssistanceTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://a6tg399ay5.execute-api.us-east-1.amazonaws.com/assistanceTypesLambda"

  getAssistanceTypes(): Observable<AssistanceTypes[]>{

    return this.http.get<AssistanceTypes[]>(this.baseUrl);
  }
}