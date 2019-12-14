import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NAME } from '@photon/config/app.config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  appname: string;

  constructor(private title: Title) {
    this.appname = NAME;
  }

  ngOnInit() {
  }

}
