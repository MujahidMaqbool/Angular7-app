import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  messageToSendP: string = '';
  counter: number = 1;
  receivedChildMessage: string;

  constructor(private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle('WalletHub | Admin');
  }


  getMessage(message: string) {
    this.receivedChildMessage = message;
  }

  sendToChild(message: string) {
    this.messageToSendP = message + ' ' + this.counter++;
  }

}
