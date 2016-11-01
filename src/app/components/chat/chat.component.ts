import { Component, OnInit,OnDestroy } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit, OnDestroy {

  messages: any = [];
  message: string;
  connection: any;
  username: string;
  alert: any = false

  constructor(private chatService: ChatService){}

  ngOnInit() {
    this.connection = this.chatService.getMessages()
      .subscribe(message => {
        this.messages.push(message);
        console.log(message)});
  }

  ngOnDestroy(){
    this.connection.unsubscribe();

  }

  sendMessage(){
  this.chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  setUsername(){
    this.chatService.setUsername(this.username)
    this.alert = 'Username is set'
  }






}
