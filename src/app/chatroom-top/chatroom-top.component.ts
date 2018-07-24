import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatroom-top',
  templateUrl: './chatroom-top.component.html',
  styleUrls: ['./chatroom-top.component.css']
})
export class ChatroomTopComponent implements OnInit {

  @Input() title: string;
  @Input() numberOfParticipants: string;

  constructor() { }

  ngOnInit() {
  }

}
