import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {

  @Input() chatService: ChatService;
  @Input() userLogged: boolean;
  message: string;

  constructor(private api: ApiServiceService) {
  }

  ngOnInit() { 
    document.getElementById('input-bar__input').addEventListener('keyup', this.sendMessage.bind(this));
  }

  sendMessage(event) {
    if(event.keyCode === 13) {
      let user = this.chatService.getUser();
      let payload = {
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        message: this.message,
        timestamp: new Date().getTime()
      }
      this.chatService.sendMessage(payload);
      this.api.newMessage(payload).subscribe((resp: string) => {
        console.log(resp)
      });
      this.message = '';
    }
  }

}
