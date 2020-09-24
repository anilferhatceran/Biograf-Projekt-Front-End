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
import { MovieGenre } from '../Model/MovieGenre';
import { Reservation } from '../Model/Reservation';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

const httpHeaders = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}

//Injectable allows us to inject a service into a constructor
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

getMovieByTitle(movieTitle:string):Observable<Movie[]>{
  return this.http.get<Movie[]>(`${this.ROOT_URL}Movie/title?title=${movieTitle}`,httpHeaders);
}
//https://localhost:44305/api/Movie/title?title=Endgame

postMovie(movie:Movie):Observable<Movie>{
  return this.http.post<Movie>(`${this.ROOT_URL}Movie`,movie,httpHeaders);
}

postMovieGenre(movieGenre:MovieGenre):Observable<MovieGenre>{
  return this.http.post<MovieGenre>(`${this.ROOT_URL}MovieGenre`,movieGenre,httpHeaders);
}

deleteMovie(movieTitle:string):Observable<{}>{
  return this.http.delete<Movie>(`${this.ROOT_URL}Movie/deleteMovieTitle?movieTitle=${movieTitle}`,httpHeaders);
  //deleteMovieTitle?movieTitle
}

postGenre(genre:Genre):Observable<Genre>{
  return this.http.post<Genre>(`${this.ROOT_URL}Genre`,genre,httpHeaders);
}

deleteGenre(genreName:string):Observable<{}>{
  return this.http.delete<Genre>(`${this.ROOT_URL}Genre/deleteGenreName?genreName=${genreName}`,httpHeaders);
}
// /Genre/1?genreName=Horror
putGenre(genreID:number,genreName:string):Observable<Genre>{
  return this.http.put<Genre>(`${this.ROOT_URL}Genre/${genreID}?genreName=${genreName}`,genreName,httpHeaders);
}

getLanguage():Observable<Language[]>{
  return this.http.get<Language[]>(`${this.ROOT_URL}Language`,httpHeaders);
}

postLanguage(language:Language):Observable<Language>{
  return this.http.post<Language>(`${this.ROOT_URL}Language`,language,httpHeaders);
}

deleteLanguage(languageName:string):Observable<{}>{
  return this.http.delete<Language>(`${this.ROOT_URL}Language/deleteLanguageName?languageName=${languageName}`,httpHeaders);
}

postHall(hall:Hall):Observable<Hall>{
  return this.http.post<Hall>(`${this.ROOT_URL}Hall`,hall,httpHeaders);
}
getSeatBySeatTaken():Observable<Seat[]>{
  return this.http.get<Seat[]>(`${this.ROOT_URL}Seat/seattaken?seattaken=false`,httpHeaders);
}

putSeat(genreID:number,genreName:string):Observable<Genre>{
  return this.http.put<Genre>(`${this.ROOT_URL}Genre/${genreID}?genreName=${genreName}`,genreName,httpHeaders);
}

postSeat(seat:Seat):Observable<Seat>{
  return this.http.post<Seat>(`${this.ROOT_URL}Seat`,seat,httpHeaders);
}
postRow(row:Row):Observable<Row>{
  return this.http.post<Row>(`${this.ROOT_URL}Row`,row,httpHeaders);
}
postSeatRow(seatRow:SeatRow):Observable<SeatRow>{
  return this.http.post<SeatRow>(`${this.ROOT_URL}SeatRow`,seatRow,httpHeaders);
}
getRows():Observable<Row[]>{
  return this.http.get<Row[]>(`${this.ROOT_URL}Row`,httpHeaders);
}
postMovieScreening(movieScreening:MovieScreening):Observable<MovieScreening>{
  return this.http.post<MovieScreening>(`${this.ROOT_URL}MovieScreening`,movieScreening,httpHeaders);
}
postTicketPrice(ticketPrice:TicketPrice):Observable<TicketPrice>{
  return this.http.post<TicketPrice>(`${this.ROOT_URL}TicketPrice`,ticketPrice,httpHeaders);
}

postReservation(reservation:Reservation):Observable<Reservation>{
  return this.http.post<Reservation>(`${this.ROOT_URL}Reservation`,reservation,httpHeaders);
}

}
