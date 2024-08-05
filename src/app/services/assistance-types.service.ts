import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistanceTypes } from '../models/assistance-types';

@Injectable({
  providedIn: 'root'
})
export class AssistanceTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/assistance-types"

  getAssistanceTypes(): Observable<AssistanceTypes[]>{

    return this.http.get<AssistanceTypes[]>(this.baseUrl);
  }
}
