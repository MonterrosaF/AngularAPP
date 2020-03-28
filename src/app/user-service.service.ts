import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  path: string;
  constructor(private http: HttpClient) {
    this.path = 'URL__API';
  }

  register(data) {
    const headersHttp: HttpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    return this.http.post(this.path + 'patch', 'params', {
      headers: headersHttp
    });
  }
  getUsers() {
    const headersHttp: HttpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    return this.http.get(this.path + 'patch', { headers: headersHttp });
  }
}
