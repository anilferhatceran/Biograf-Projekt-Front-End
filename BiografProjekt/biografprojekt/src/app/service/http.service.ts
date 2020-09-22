import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../Model/User';
import { Movie } from "../Model/Movie";
import { Genre } from "../Model/Genre";
import { Language } from "../Model/Language";
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
ROOT_URL:string = 'https://localhost:44305/api/';

constructor(private http:HttpClient) { }


postUser(user:User):Observable<User>{
  return this.http.post<User>(`${this.ROOT_URL}User`,user);
}

getUser():Observable<User[]>{
  return this.http.get<User[]>(`${this.ROOT_URL}User`);
}

getMovie():Observable<Movie[]>{
  return this.http.get<Movie[]>(`${this.ROOT_URL}Movie`);
}

getLanguage():Observable<Language[]>{
  return this.http.get<Language[]>(`${this.ROOT_URL}Language`);
}

postGenre(genre:Genre):Observable<Genre>{
  return this.http.post<Genre>(`${this.ROOT_URL}Genre`,genre);
}

postMovie(movie:Movie):Observable<Movie>{
  return this.http.post<Movie>(`${this.ROOT_URL}Movie`,movie);
}

deleteMovie(movieTitle:string):Observable<{}>{
  return this.http.delete<Movie>(`${this.ROOT_URL}Movie/deleteMovieTitle?movieTitle=${movieTitle}`);
  //deleteMovieTitle?movieTitle
}

}
