import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() chatService: ChatService;
  // Declare needed variables to display messages 

  constructor() {
    // Write function to retrieve messages, both in the database and live ones
    // Hint: look at app.component
  }

  ngOnInit() {
  }

}
