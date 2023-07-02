import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: string = "0";
  constructor() { }

  ngOnInit(): void {
    this.login="0"
    let log = sessionStorage.getItem("login") as string;
    console.log(log)
    this.login = log;
  }

}
