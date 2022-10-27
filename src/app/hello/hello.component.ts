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
  nowClass: any;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'false, false, false';
    this.nowClass = {
      'thin': false,
      'large': false,
      'frame': false,
    };
  }

  check(c1: any, c2: any, c3: any) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.message = c1 + ',' + c2 + ',' + c3;
  }
}
