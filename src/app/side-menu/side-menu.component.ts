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
  searchQuery: string;
  @Input() backupUsers: any;
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
    this.api.newUser(this.user).subscribe((resp: string) => {
      this.user.id = resp.substring(resp.indexOf('user') + 4, resp.indexOf('.')).trim();
      this.userLogged = true;
      this.username = '';
      this.userLogChange.emit(this.user);
    });
  }

  handleSearch() {
    this.users = [];
    if (this.searchQuery.length === 0) {
      this.users = Object.assign([], this.backupUsers);
    } else {
      this.users = this.backupUsers.filter((item) => {
        return (item.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()))
      });
    }
  }

}
