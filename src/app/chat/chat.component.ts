
import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';
// ============================== DOWN HERE ===============================
import { ApiServiceService } from '../api-service.service';
// ============================== UP HERE =================================

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() chatService: ChatService;
  messages: any;
  // Declare needed variables to display messages 

  constructor(private api: ApiServiceService) {
    // Write function to retrieve messages, both in the database and live ones
    // Hint: look at app.component in constructor
    
  }

  ngOnInit() {
    this.api.getMessages().subscribe((resp) => {
      this.messages = resp;
      this.messages.forEach((item) => {
        if (this.chatService.getUser() && 
            item.firstName === this.chatService.getUser().firstName &&
            item.lastName === this.chatService.getUser().lastName) {
              item.me = true;
            } else {
              item.me = false;
            }
      })
      console.log(this.messages);
    });

    this.chatService.getMessages().subscribe((resp) => {
      if (this.chatService.getUser() && 
            resp.firstName === this.chatService.getUser().firstName &&
            resp.lastName === this.chatService.getUser().lastName) {
              resp.me = true;
            } else {
              resp.me = false;
            }
      this.messages.push(resp);
      console.log(resp);
    })
  }

}
