import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-screening-item',
  templateUrl: './screening-item.component.html',
  styleUrls: ['./screening-item.component.css']
})
export class ScreeningItemComponent implements OnInit {


  constructor(private http:HttpClient,private service:HttpService) { }

  ngOnInit() {
  }

}
