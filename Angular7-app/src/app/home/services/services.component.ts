import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private pageHeadingService: DataService,
    private _titleService: Title,) { }

  ngOnInit() {

    this._titleService.setTitle('WalletHub | Home | Services');
    this.pageHeadingService.changePageHeading('Services');

  }

}
