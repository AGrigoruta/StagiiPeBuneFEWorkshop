import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  users: any;
  userLogged: boolean;
  chatroomTitle: string;
  chat: ChatService = new ChatService();

  //implement sockets here perhaps
  constructor(api: ApiServiceService) {
    this.userLogged = false;

    api.getUsers().subscribe((resp) => {
      this.users = resp;
    });

    this.chatroomTitle = 'Front-End Madness';
    
    this.chat.getUsers().subscribe((user) => {
        this.users.unshift(user);
    });
  }

  handleUserLog(event: Event) {
    this.users.unshift(event);
    this.user = event;
    this.userLogged = true;
    this.chat.setUser(this.user);
    this.chat.newUser(this.user);
  }
}
