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

    ngOnInit() {
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

}
