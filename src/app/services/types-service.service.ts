import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypesService } from '../models/types-service';

@Injectable({
  providedIn: 'root'
})
export class TypesServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://1wyaory04g.execute-api.us-east-1.amazonaws.com/query1";

  getTypesService(): Observable<TypesService[]>{

    return this.http.get<TypesService[]>(this.baseUrl);
  }
}
