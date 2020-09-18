import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';

import { Movie } from 'src/app/Model/Movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie:Movie;

  constructor(private http:HttpClient,private service:HttpService) { }

  ngOnInit() {
  }

}
