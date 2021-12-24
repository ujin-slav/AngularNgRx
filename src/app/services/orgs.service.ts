import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo, ToDoContent } from '../store/model';

@Injectable({
  providedIn: 'root'
})
export class OrgsService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }
      
  getData(page:number): Observable<ToDoContent> {
    return this.http.get<ToDoContent>(this.apiUrl + "?page=" + page);
  }

}
