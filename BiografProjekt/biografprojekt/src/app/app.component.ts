import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'biografprojekt';


  // posts: any;
  // constructor(private http: HttpClient){}

  // getPosts(){
  //   this.posts = this.http.get(this.ROOT_URL + '/Genre')
  // }
}
