import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from "src/app/Model/Genre";
import { Seat } from "src/app/Model/Seat";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  genres: Genre[];
  seat:Seat[];

  constructor(private http:HttpClient,private service:HttpService) { }

  addMovieForm = new FormGroup(
    {
      movieTitle: new FormControl(''),
      releaseDate: new FormControl(''),
      movieDesc: new FormControl(''),
      movieRunTime: new FormControl(''),
      language: new FormGroup({
        languageID: new FormControl(''),
      })
    }
    );
  addSeatRowForm = new FormGroup(
    {
      row: new FormGroup({
        rowID: new FormControl(''),
      }),
      seat: new FormGroup({
        seatID: new FormControl(''),
      }),
      movieScreening: new FormGroup({
        movieScreeningID: new FormControl(''),
      })
     }
    );

  addMovieScreeningForm = new FormGroup(
    {
      movie: new FormGroup({
        movieID: new FormControl(''),
      }),
      hall: new FormGroup({
        hallID: new FormControl(''),
      }),
      screeningDate: new FormControl(''),
      screeningStartTime: new FormControl(''),
      screeningEndTime: new FormControl(''),
    }
  )

  addGenreForm = new FormGroup(
    {
      genreName: new FormControl(''),
    }
  );

  addLanguageForm = new FormGroup(
    {
      languageName: new FormControl(''),
      languageCode: new FormControl(''),
    }
  );

  addHallForm = new FormGroup(
    {
      hallNumOfSeats: new FormControl(''),
      numOfRows: new FormControl(''),
    }
  )

  addSeatsForm = new FormGroup(
    {
      numberOfSeats: new FormControl(''),
    }
  )
  addRowsForm = new FormGroup(
    {
      numberOfRows: new FormControl(''),
    }
  )
  addTicketPricesForm = new FormGroup(
    {
      ticketName: new FormControl(''),
      ticketPrice: new FormControl(''),
    }
  )

  addMovieGenreForm = new FormGroup(
    {
      movie: new FormGroup({
        movieID: new FormControl(''),
      }),
      genre: new FormGroup({
        genreID: new FormControl(''),
      }),
    }
  )

  addReservationForm = new FormGroup(
    {
      user: new FormGroup({
        userID: new FormControl(''),
      }),
      seatRow: new FormGroup(
        {
          seatRowID: new FormControl(''),
      }),
      movieScreening: new FormGroup(
        {
          movieScreeningID: new FormControl(''),
        }),
      ticketPrice: new FormGroup({
        ticketPriceID: new FormControl(''),
      }),
      hall: new FormGroup({
        hallID: new FormControl(''),
      })
    }
  )

  ngOnInit():void {
  }

  onSubmitCreateMovieGenre(){
    console.log(this.addMovieGenreForm.value);

    this.service.postMovieGenre(this.addMovieGenreForm.value).subscribe(movieGenre => console.log(movieGenre))
  }

  onSubmitCreateReservation(){
    console.log(this.addReservationForm.value);

    this.service.postReservation(this.addReservationForm.value).subscribe(reservation => console.log(reservation))
  }

  onSubmitCreateGenre(){
    console.log(this.addGenreForm.value);

    this.service.postGenre(this.addGenreForm.value).subscribe(genre => console.log(genre));
  }

  onSubmitCreateMovie(){
    console.log(this.addMovieForm.value);

    this.service.postMovie(this.addMovieForm.value).subscribe(movie => console.log(movie));
  }

  onSubmitCreateLanguage(){
    console.log(this.addLanguageForm.value);

    this.service.postLanguage(this.addLanguageForm.value).subscribe(language => console.log(language));

  }

  onSubmitCreateHall(){
    this.service.postHall(this.addHallForm.value).subscribe(hall => console.log(hall));

  }

  onSubmitCreateSeats(){

    for (let index = 1; index <= this.addSeatsForm.value.numberOfSeats; index++) {

      let element:any = {seatNumber: index};

      this.service.postSeat(element).subscribe(seat => console.log(seat));
    }
  }

  onSubmitCreateRows(){

    for (let index = 1; index <= this.addRowsForm.value.numberOfRows; index++) {

      let element:any = {rowNumber: index};

      this.service.postRow(element).subscribe(row => console.log(row));
    }
  }

  onSubmitCreateSeatRow(){
    console.log(this.addSeatRowForm.value);

    this.service.postSeatRow(this.addSeatRowForm.value).subscribe(seatRow => console.log(seatRow));
  }

  onSubmitCreateMovieScreening(){
    console.log(this.addMovieScreeningForm.value);

    this.service.postMovieScreening(this.addMovieScreeningForm.value).subscribe(movieScreening => console.log(movieScreening));
  }

  onSubmitCreateTicketPrices(){
    console.log(this.addTicketPricesForm.value);

    this.service.postTicketPrice(this.addTicketPricesForm.value).subscribe(ticketPrice => console.log(ticketPrice));
  }

}
