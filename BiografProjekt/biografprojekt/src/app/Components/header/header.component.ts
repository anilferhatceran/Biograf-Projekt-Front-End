import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  users: User[];
  @Input() user: User;
  constructor(private http:HttpClient,private service:HttpService) { }

  createUserForm = new FormGroup(
    {
      userEmail: new FormControl(''),
      passwordHash: new FormControl(''),
    }
  );
  loginUserForm = new FormGroup(
    {
      userEmail: new FormControl(''),
      passwordHash: new FormControl(''),
    }
  );

  ngOnInit() {
    this.service.getUser().subscribe(user => {
      this.users = user;
    },
    err => console.error(err),
    () => console.log(this.users)


    );
  }

  onSubmitCreate(){
    console.log("Hej");
    console.log(this.createUserForm.value);

    this.service.postUser(this.createUserForm.value).subscribe(U => console.log(U));
  }

  onSubmitLogin(user){
    console.log("Hej Login");
    this.service.getUser().subscribe(user => console.log(user));

  }
}
