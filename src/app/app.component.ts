import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular_002';

  user: User = {name: '', gender: ''};
  show: boolean = false;
  
  ngOnInit(){
    
  }

  showButton(){
    this.show = !this.show;
  }

  logthat(){
    console.log(`User: ${this.user.name} - Gender: ${this.user.gender}`);
  }
}
