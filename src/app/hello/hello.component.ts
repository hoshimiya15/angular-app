import { Component, OnInit } from '@angular/core';
// OnInitはコンポーネント初期化のためのメソッド呼び出しなどを追加

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  input: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.input = '';
  }

  doType(val:string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }
}
