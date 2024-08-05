import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/units"

  getUnits(): Observable<Unit[]>{

    return this.http.get<Unit[]>(this.baseUrl);
  }
}
