import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  chatroomTitle: string;

  //implement sockets here perhaps
  constructor(api: ApiServiceService) {
    api.getUsers().subscribe((resp) => {
      this.users = resp;
    });
    this.chatroomTitle = 'Front-End Madness';
  }

  handleUserLog(event: Event) {
    console.log(event);
    this.users.unshift(event);
  }
}
