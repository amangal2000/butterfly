import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  news: boolean = true;
  sports: boolean = false;
  breaking_news: boolean = false;
  finance: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSave(): void {
    console.log("saved");
    console.log(this.news);
    console.log(this.sports);
    console.log(this.breaking_news);
    console.log(this.finance);

  }

}
