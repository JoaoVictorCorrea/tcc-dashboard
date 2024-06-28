import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistanceTypes } from '../models/assistance-types';

@Injectable({
  providedIn: 'root'
})
export class AssistanceTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://1wyaory04g.execute-api.us-east-1.amazonaws.com/query1";

  getAssistanceTypes(): Observable<AssistanceTypes[]>{

    return this.http.get<AssistanceTypes[]>(this.baseUrl);
  }
}
