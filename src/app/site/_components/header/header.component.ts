import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoGrcTeam     = '/assets/site/imgs/logoGrcTeam.png';

  constructor() { }

  ngOnInit() {
  }

}
