import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Orgs} from '../Orgs'

@Injectable({
  providedIn: 'root'
})
export class OrgsService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }
      
  getData(page:number): any {
    return this.http.get<Orgs[]>(this.apiUrl + "?page=" + page);
  }

}
