import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NAME } from '@photon/config/app.config';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  appname: string;
  @ViewChild('viewport', { static: false }) viewport: ElementRef;
  year: number;

  constructor(private title: Title, @Inject(DOCUMENT) private document: Document) {
    this.appname = NAME;
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

  onMoreInfo() {
    this.document.defaultView.scrollTo(0, this.viewport.nativeElement.scrollHeight);
  }
}
