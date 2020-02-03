import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private pageHeadingService: DataService,
    private _titleService: Title, ) { }

  ngOnInit() {

    this._titleService.setTitle('WalletHub | Home | Team');
    this.pageHeadingService.changePageHeading('Team');

  }

  usersList: any = [
    {
      name: 'Frank Ltarnam',
      position: 'CEO',
      imgSrc: '../../assets//4-people/gaetan-houssin.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    },
    {
      name: 'Bob Shefley',
      position: 'UI/UX Designer',
      imgSrc: '../../assets//4-people/nicolas-lebarreau.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    },
    {
      name: 'Json Stewars',
      position: 'Full-stack Developer',
      imgSrc: '../../assets//4-people/jerome-mahuet.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    },
    {
      name: 'Sabrina Rachel',
      position: 'Marketing',
      imgSrc: '../../assets//4-people/manuela-faveri.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    },
    {
      name: 'Marissa Lawren',
      position: 'Customer Support',
      imgSrc: '../../assets//4-people/darlene-chabrat.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    },
    {
      name: 'Romane Reged',
      position: 'Jr UI/UX Designer',
      imgSrc: '../../assets//4-people/romane-regad.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    },
    {
      name: 'Tania Ferreira',
      position: 'Business Analyst',
      imgSrc: '../../assets//4-people/tania-ferreira.jpg',
      description: 'Lorem Ipsum has been the industry standard dummy text ever'
    }

  ]

}
