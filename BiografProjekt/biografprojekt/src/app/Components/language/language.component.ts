import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/Model/Language';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  language;

  constructor(private http:HttpClient,private service:HttpService) { }

  ngOnInit():void {
  }
  onButtonGetLanguage(language:Language){

    console.log("ga");

    this.service.getLanguage().subscribe(languages =>{
      this.language = languages;
    })
  }
}
