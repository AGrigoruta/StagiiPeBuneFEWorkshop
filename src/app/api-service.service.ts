import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = '/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let url = this.apiUrl;
    if (environment.production === false) {
      url = '../assets/mocks/users.json';
    }
    return this.http.get(url);
  }

  newUser(user: any) {
    let url = this.apiUrl;
    let payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      profilePic: user.profilePic
    };
    console.log(payload);
    return this.http.post(url, payload, {responseType: 'text'});
  }
}
