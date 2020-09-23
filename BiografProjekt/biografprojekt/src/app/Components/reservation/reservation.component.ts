import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/Movie';
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
  testingVar;

  constructor(private http:HttpClient,private service:HttpService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("movieTitle"));

    this.service.getMovieByTitle(sessionStorage.getItem("movieTitle")).subscribe(movies =>{
      this.movie = movies;
    })

    this.service.getSeatBySeatTaken().subscribe(seats =>{
      this.seat = seats;
    })
  }
  onClickTest(){
    console.log(this.testingVar);
}
}
