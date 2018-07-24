import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  //implement sockets here perhaps
  constructor(api: ApiServiceService) {
    api.getUsers().subscribe((resp) => {
      this.users = resp.users;
      console.log(this.users);
    })
  }

}
