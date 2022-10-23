import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getGithubAccessToken(code: string): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/auth/github/access_token`, {code: code})
  }
}
