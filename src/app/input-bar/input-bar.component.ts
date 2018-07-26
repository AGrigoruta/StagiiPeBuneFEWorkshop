import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {

  @Input() chatService: ChatService;
  @Input() userLogged: boolean;
  message: string;

  constructor() {
  }

  ngOnInit() { 
    document.getElementById('input-bar__input').addEventListener('keyup', this.sendMessage.bind(this));
  }

  sendMessage(event) {
    if(event.keyCode === 13) {
      let payload = {
        user: this.chatService.getUser(),
        message: this.message,
        timestamp: new Date().getTime()
      }
      this.chatService.sendMessage(payload);
      this.message = '';
    }
  }

}
