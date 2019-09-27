import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  addUrl = 'http://localhost:4200/addUser';
  getUrl = 'http://localhost:4200/getUser';


  addUser(form) {
    return this.http.post<any>(this.addUrl, form);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.getUrl);
  }
}
