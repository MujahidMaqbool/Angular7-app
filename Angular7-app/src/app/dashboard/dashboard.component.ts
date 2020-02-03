import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent implements OnInit {

  constructor(private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle('WalletHub | Dashboard');
  }

}
