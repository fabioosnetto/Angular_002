import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from "./user-service.service";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular_002';

  user: User = {name: '', gender: ''};
  show: boolean = false;

  users!: any[];

  constructor(private _userservice: UserService){}
  
  ngOnInit(){
    this._userservice.getUserDB()
      .pipe(
        tap(data => {console.log(data)})
      )
      .subscribe(data => {
      this.users = data.users;
    });
  }

  showButton(){
    this.show = !this.show;
  }

  logthat(){
    console.log(`User: ${this.user.name} - Gender: ${this.user.gender}`);
  }
}
