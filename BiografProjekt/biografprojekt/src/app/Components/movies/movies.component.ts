import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/Movie';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie:Movie[];

  constructor(private http:HttpClient,private service:HttpService) { }

  ngOnInit():void {
    this.service.getMovie().subscribe(movies =>{
      this.movie = movies;
    })
  }

}
