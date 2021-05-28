import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  logoGrcTeam     = '/assets/site/imgs/logoGrcTeam.png';
  linkedinLogo    = '/assets/site/imgs/logo-linkedin.png';
  imgFndHome      = '/assets/site/imgs/imgFndHome.png';
  imgFndEgrc      = '/assets/site/imgs/imgFndEgrc.png';
  imageedit       = '/assets/site/imgs/imageedit.png';
  imgfndwebp      = '/assets/site/imgs/imgfndwebp.png'
  integrantes = [
      {id:1, nome:'FERNANDO BRAVO',  cargo:'Diretor Executivo',       linkedin:'https://www.linkedin.com/in/fernando-bravo-36743810b/', img:'/assets/site/imgs/ftFernandobravo.png'},
      {id:1, nome:'GISELE SOARES',   cargo:'Diretora Comercial',      linkedin:'https://www.linkedin.com/in/gisele-soares-5613a920/',   img:'/assets/site/imgs/ftGilesesoares.png'},
      {id:1, nome:'MAURICIO BALDIN', cargo:'Diretor Inovação em GRC', linkedin:'https://www.linkedin.com/in/mauriciobaldinrick/',       img:'/assets/site/imgs/ftMauriciobaldin.png'},
      // {id:1, nome:'HENRIQUE \n STABELIN', cargo:'Diretor Executivo',       linkedin:'https://www.linkedin.com/in/henrique-stabelin/',        img:'/assets/site/imgs/ftHenriquestabelin.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
