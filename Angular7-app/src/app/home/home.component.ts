import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { DataService } from '../services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  childPageName: string;

  constructor(
    private pageHeadingService: DataService,
    private _titleService: Title,

  ) { }

  ngOnInit() {
    this._titleService.setTitle('WalletHub | Home');
    this.pageHeadingService.pageHeading.subscribe(message => this.childPageName = message);
  }





}
