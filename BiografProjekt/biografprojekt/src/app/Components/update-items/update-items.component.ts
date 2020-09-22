import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from "src/app/Model/Genre";

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {

  constructor(private http:HttpClient,private service:HttpService) { }

  putGenreForm = new FormGroup(
    {
      genreID: new FormControl(''),
      genreName: new FormControl(''),
    }
  )

  ngOnInit() {
  }


  onSubmitPutGenre(){

    this.service.putGenre(this.putGenreForm.value.genreID,this.putGenreForm.value.genreName).subscribe(genre => console.log(genre));
  }
}
