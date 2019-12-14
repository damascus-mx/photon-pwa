import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NAME } from '@photon/config/app.config';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(`${NAME} - Inicio`);
    this.meta.updateTag({name: 'description', content: 'Empieza a pedir tu material de laboratorio a traves de Damascus Photon.'});
  }

  ngOnInit() {
  }

}
