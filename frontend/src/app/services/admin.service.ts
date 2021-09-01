import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Post } from "../models/Post";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "http://localhost:3000/admin/";
  private urlUsers = "http://localhost:3000/admin/users";


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  fetchAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.urlUsers, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<User[]>("fetchAllUsers", []))
      );
  }

  fetchOneUser(postId: Pick<User, "id">): Observable<{}> {
    return this.http
      .get<User>(`${this.urlUsers}/${postId}`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<User[]>("fetchOneUser", []))
      );
  }


}
0