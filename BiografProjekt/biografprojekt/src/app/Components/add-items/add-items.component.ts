import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from "src/app/Model/Genre";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  genres: Genre[];

  constructor(private http:HttpClient,private service:HttpService) { }

  addGenreForm = new FormGroup(
    {
      genreName: new FormControl(''),
    }
  );

  addMovieForm = new FormGroup(
    {
      movieTitle: new FormControl(''),
      releaseDate: new FormControl(''),
      movieDesc: new FormControl(''),
      movieRunTime: new FormControl(''),
    }
  );

  ngOnInit() {
  }

  onSubmitCreate(){
    console.log("Hej");
    console.log(this.addGenreForm.value);

    this.service.postGenre(this.addGenreForm.value).subscribe(U => console.log(U));
  }

}
