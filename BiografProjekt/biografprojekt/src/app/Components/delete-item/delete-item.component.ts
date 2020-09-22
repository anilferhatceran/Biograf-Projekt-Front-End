import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/Model/Movie';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  movies;
  @Input() movie: Movie;


  constructor(private http:HttpClient,private service:HttpService) { }


  deleteMovieForm = new FormGroup(
    {
      movieTitle: new FormControl(''),
    })

  ngOnInit() {
  }

  onSubmitDeleteMovie(){
    console.log(this.deleteMovieForm.value);

    // this.movies = this.movies.filter(t => t.movieTitle == movie.movieTitle)

    // this.service.deleteMovie(movie).subscribe();

    //this.service.deleteMovie(this.deleteMovieForm.value).subscribe(t => t.movieID == movie.movieID);

    this.service.deleteMovie(this.deleteMovieForm.value.movieTitle).subscribe()
  }
}
