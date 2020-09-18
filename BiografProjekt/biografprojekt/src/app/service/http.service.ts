import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../Model/User';
import { Movie } from "../Model/Movie";
import { Genre } from "../Model/Genre";
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
ROOT_URL:string = 'https://localhost:44305/api/';

constructor(private http:HttpClient) { }


postUser(user:User):Observable<User>{
  return this.http.post<User>(`${this.ROOT_URL}User`,user,httpHeaders);
}

getUser():Observable<User[]>{
  return this.http.get<User[]>(`${this.ROOT_URL}User`,httpHeaders);
}

getMovie():Observable<Movie[]>{
  return this.http.get<Movie[]>(`${this.ROOT_URL}Movie`,httpHeaders);
}

postGenre(genre:Genre):Observable<Genre>{
  return this.http.post<Genre>(`${this.ROOT_URL}Genre`,genre,httpHeaders);
}

}
