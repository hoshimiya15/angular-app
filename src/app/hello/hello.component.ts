import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// OnInitはコンポーネント初期化のためのメソッド呼び出しなどを追加

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'FormControlを使う';
    this.myControl = new FormGroup({
      control: new FormControl(),
    });
  }

  onSubmit() {
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }
}
