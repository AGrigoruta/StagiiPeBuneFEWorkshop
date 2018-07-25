import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  userLogged: boolean;
  user: any;
  username: string;
  @Input() users: any;
  @Output() userLogChange: EventEmitter<any> = new EventEmitter;

  constructor(private api: ApiServiceService) {
    this.userLogged = false;
    this.user = {};
  }

  ngOnInit() {
  }

  logUser() {
    let firstName = this.username.substring(0, this.username.indexOf(' '));
    let lastName = this.username.substring(this.username.indexOf(' '), this.username.length).trim();
    let profilePic = `picture-${Math.floor(Math.random() * 6) + 1}`;
    this.user = {firstName, lastName, profilePic}
    this.api.newUser(this.user).subscribe((resp) => {
      this.userLogged = true;
      this.username = '';
      this.userLogChange.emit(this.user);
    });
  }

}
