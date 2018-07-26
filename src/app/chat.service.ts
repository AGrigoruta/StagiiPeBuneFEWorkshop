import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000';
  private socket;
  private user;

  constructor() {
      this.socket = io(this.url);
  }

  public setUser(user) {
    this.user = user;
  }

  public getUser() {
    return this.user;
  }

  public sendMessage(body) {
    this.socket.emit('message', body);
  }

  public getMessages = () => {
      return Observable.create((observer) => {
          this.socket.on('message', (message) => {
              observer.next(message);
          });
      });
  }
}
