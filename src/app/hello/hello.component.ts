import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title:string;
  message:string;
  text1:string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'ngModelを使う';
    this.text1 = '';
  }
}
