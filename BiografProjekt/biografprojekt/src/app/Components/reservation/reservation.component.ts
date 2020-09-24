import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/Movie';
import { Row } from 'src/app/Model/Row';
import { Seat } from 'src/app/Model/Seat';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  movie:Movie[];
  seat:Seat[];
  row:Row[];
  seatNumber;
  rowNumber;

  constructor(private http:HttpClient,private service:HttpService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("movieTitle"));
    console.log(this.seatNumber);

    this.service.getMovieByTitle(sessionStorage.getItem("movieTitle")).subscribe(movies =>{
      this.movie = movies;
    })

    this.service.getRows().subscribe(rows =>{
      this.row = rows;
    })

    this.service.getSeatBySeatTaken().subscribe(seats =>{
      this.seat = seats;
    })
  }
  onClickShowSeats(){
    console.log(this.seatNumber);
  }
  onClickShowRows(){
    console.log(this.rowNumber);
  }
}
