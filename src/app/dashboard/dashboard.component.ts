import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { TopNews, NyTimesNews } from '../topnews';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nyTimesResults: NyTimesNews[] = [];
  newsResults: TopNews[] = [];
  sportsResults: TopNews[] = [];
  constructor(private dashboardService: DashboardService) { }
  onTwitterSignIn() {
    // console.log("button worked!");
    // this.dashboardService.twitter().subscribe((articles: TopNews[]) => this.dataSource.data = articles);
    // let temp: TopNews[] = [{abstract: "d", uri: 'ds'}];
    // this.dataSource.data = temp;
    

    console.log("dd" + this.sportsResults[0].title);
  }

  ngOnInit(): void {
    this.dashboardService.nyTimes().subscribe((articles: any) => this.nyTimesResults = articles.results);
    this.dashboardService.news().subscribe((articles: any) => this.newsResults = articles.articles);
    this.dashboardService.espn().subscribe((articles: any) => this.sportsResults = articles.articles);

  }

}
