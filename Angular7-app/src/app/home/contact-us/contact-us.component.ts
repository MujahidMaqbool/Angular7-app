import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';


import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private pageHeadingService: DataService,
    private _titleService: Title, ) { }

  ngOnInit() {

    this._titleService.setTitle('WalletHub | Home | Contact us');
    this.pageHeadingService.changePageHeading('Contact');

  }

}
