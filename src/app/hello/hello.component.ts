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
  text1: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'false, false, false';
    this.text1 = '';
  }
}
