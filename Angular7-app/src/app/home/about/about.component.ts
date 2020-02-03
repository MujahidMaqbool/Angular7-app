import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-120%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(120%)' }))
      ])
    ]),
    trigger('EnterImage', [
      state('flyIn', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(120%)' }),
        animate('0.5s 300ms ease-in')
      ]),
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor(private pageHeadingService: DataService,
    private _titleService: Title,
  ) { }

  ngOnInit() {

    this._titleService.setTitle('WalletHub | Home | about us');
    this.pageHeadingService.changePageHeading('About');
  }

}
