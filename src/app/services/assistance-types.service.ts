import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistanceTypes } from '../models/assistance-types';

@Injectable({
  providedIn: 'root'
})
export class AssistanceTypesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://x4edb6qiys6723beimsxshyofm0olgee.lambda-url.us-east-1.on.aws/"

  getAssistanceTypes(): Observable<AssistanceTypes[]>{

    return this.http.get<AssistanceTypes[]>(this.baseUrl);
  }
}
