import { Component } from '@angular/core';

import { NewsApiService } from './news-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsservice : NewsApiService)
  {
     console.log("ápp component called");
  }

  ngOnInit()
  {
      //load articles
      this.newsservice.initArticles().subscribe( data => this.mArticles = data['articles']);

      //load sources
      this.newsservice.initSources().subscribe( data => this.mSources = data['sources']);
  }

  searchArticles(source)
  {
    console.log('selected source is '+source);
    this.newsservice.getArticlesByID(source).subscribe( data => this.mArticles = data['articles']);
  }
}
