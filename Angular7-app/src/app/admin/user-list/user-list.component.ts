import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input() receivedParentMessage: any;
  @Output() messageToEmit = new EventEmitter<any>();

  changes: any;
  counter: number = 1;
  users: any[] = [];

  constructor(private userDataService: DataService) { }

  ngOnInit() {

    this.userDataService.createdUserData.subscribe(message => this.users = message);
  }

  sendMessageToParent(message: any) {
    this.messageToEmit.emit(message + ' ' + this.counter++)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changes = JSON.stringify(changes);
  }

}
