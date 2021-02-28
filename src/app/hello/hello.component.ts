import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title:string;
  message:string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'ngModelを使う';
  }

  onSubmit(val){
   this.message = JSON.stringify(val);
  }
}
