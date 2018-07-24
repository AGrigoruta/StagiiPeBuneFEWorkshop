import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  userLogged: boolean;
  user: any;
  @Input() users: any;

  constructor() {
    this.userLogged = false;
    this.user = {
      firstName: 'John',
      lastName: 'Smith',
      profilePic: 'picture-1'
    }
    console.log(this.users);
  }

  ngOnInit() {
  }

  logUser(firstName: String, lastName: String) {
    //do back-end call and get data from there then add it here as an Object
    this.userLogged = true;
  }

}
