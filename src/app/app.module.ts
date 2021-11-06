import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TweetFeedComponent } from './tweet-feed/tweet-feed.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TweetFeedComponent,
    TweetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
