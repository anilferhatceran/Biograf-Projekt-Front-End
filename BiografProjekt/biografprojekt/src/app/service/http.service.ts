import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../Model/User';
import { Movie } from "../Model/Movie";
import { Genre } from "../Model/Genre";
import { Language } from "../Model/Language";
import { Hall } from '../Model/Hall';
import { Seat } from '../Model/Seat';
import { Row } from '../Model/Row';
import { SeatRow } from '../Model/SeatRow';
import { MovieScreening } from '../Model/MovieScreening';
import { TicketPrice } from '../Model/TicketPrice';
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

postMovie(movie:Movie):Observable<Movie>{
  return this.http.post<Movie>(`${this.ROOT_URL}Movie`,movie);
}

deleteMovie(movieTitle:string):Observable<{}>{
  return this.http.delete<Movie>(`${this.ROOT_URL}Movie/deleteMovieTitle?movieTitle=${movieTitle}`);
  //deleteMovieTitle?movieTitle
}

postGenre(genre:Genre):Observable<Genre>{
  return this.http.post<Genre>(`${this.ROOT_URL}Genre`,genre);
}

deleteGenre(genreName:string):Observable<{}>{
  return this.http.delete<Genre>(`${this.ROOT_URL}Genre/deleteGenreName?genreName=${genreName}`);
}
// /Genre/1?genreName=Horror
putGenre(genreID:number,genreName:string):Observable<Genre>{
  return this.http.put<Genre>(`${this.ROOT_URL}Genre/${genreID}?genreName=${genreName}`,genreName);
}

getLanguage():Observable<Language[]>{
  return this.http.get<Language[]>(`${this.ROOT_URL}Language`);
}

postLanguage(language:Language):Observable<Language>{
  return this.http.post<Language>(`${this.ROOT_URL}Language`,language);
}

deleteLanguage(languageName:string):Observable<{}>{
  return this.http.delete<Language>(`${this.ROOT_URL}Language/deleteLanguageName?languageName=${languageName}`);
}

postHall(hall:Hall):Observable<Hall>{
  return this.http.post<Hall>(`${this.ROOT_URL}Hall`,hall);
}
getSeatBySeatTaken():Observable<Seat[]>{
  return this.http.get<Seat[]>(`${this.ROOT_URL}Seat/seattaken?seattaken=false`);
}
postSeat(seat:Seat):Observable<Seat>{
  return this.http.post<Seat>(`${this.ROOT_URL}Seat`,seat);
}
postRow(row:Row):Observable<Row>{
  return this.http.post<Row>(`${this.ROOT_URL}Row`,row);
}
postSeatRow(seatRow:SeatRow):Observable<SeatRow>{
  return this.http.post<SeatRow>(`${this.ROOT_URL}SeatRow`,seatRow);
}
postMovieScreening(movieScreening:MovieScreening):Observable<MovieScreening>{
  return this.http.post<MovieScreening>(`${this.ROOT_URL}MovieScreening`,movieScreening);
}
postTicketPrice(ticketPrice:TicketPrice):Observable<TicketPrice>{
  return this.http.post<TicketPrice>(`${this.ROOT_URL}TicketPrice`,ticketPrice);
}
}
