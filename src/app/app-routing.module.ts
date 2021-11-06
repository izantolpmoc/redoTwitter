import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tweetList } from './feedList';
import { HomeComponent } from './home/home.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TweetFeedComponent } from './tweet-feed/tweet-feed.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'details/:Id', component:TweetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
