import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://pvmgu2uv58.execute-api.us-east-1.amazonaws.com/UnitsLambda"

  getUnits(): Observable<string>{

    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}
