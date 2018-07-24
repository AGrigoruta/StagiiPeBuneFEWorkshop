import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let url = '/users'
    if (environment.production === false) {
      url = '../assets/mocks/users.json';
    }
    return this.http.get(url);
  }
}
