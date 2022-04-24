import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
const axios = require('axios');


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  
  nyTimes(): Observable<any> {
    console.log('hit service!');
    const params = {
      access_key: 'EK8gRwasHAzq2tPXMCtuPJT3V0BSgbk2' //NYT

    }
    return this.http.get<any>('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EK8gRwasHAzq2tPXMCtuPJT3V0BSgbk2');
  }

  //twitter_acess_key: 'Ilh2qSkhsXwDnJHjwLV2Q3NWr'
  news(): Observable<any> {
    const params = {
      access_key: '9fb8341a78774f5797b49c33af481724' // newsapi
    }
    
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb8341a78774f5797b49c33af481724');
  }

  espn(): Observable<any> {
    const params = {
      access_key: '9fb8341a78774f5797b49c33af481724' // newsapi
    }
    
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9fb8341a78774f5797b49c33af481724');
  }
}
