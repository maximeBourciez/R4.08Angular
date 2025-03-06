import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Cd} from '../models/cd.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  // Méthodes
  getAllCds(): Observable<Cd[]> {
    return this.http.get<Cd[]>('http://localhost:3000/CD');
  }

  // Méthode de récupération d'un cd par son id
  getCdById(id: number): Observable<Cd> {
    return this.http.get<Cd>(`http://localhost:3000/CD/${id}`);
  }
}
