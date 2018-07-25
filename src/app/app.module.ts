import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { ChatComponent } from './chat/chat.component';
import { ChatroomTopComponent } from './chatroom-top/chatroom-top.component';
import { UserListComponent } from './side-menu/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    InputBarComponent,
    ChatComponent,
    ChatroomTopComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
