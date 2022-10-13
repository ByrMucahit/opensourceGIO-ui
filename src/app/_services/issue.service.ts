import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Issue} from "../_models/issue";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

  list(repositoryId: number): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${environment.API_URL}/issues?repository_id=${repositoryId}`)
  }
}
