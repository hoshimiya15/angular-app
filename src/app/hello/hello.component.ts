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
  data: string[];

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'data list.';
    this.data = [
      '最初の項目です。',
      '2番目の項目です。',
      '最後の項目です。',
    ];
  }
}
