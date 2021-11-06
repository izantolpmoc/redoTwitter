import { Component, OnInit } from '@angular/core';
import { Tweet } from '../feedList';
import { tweetList } from '../feedList';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-tweet-feed',
  templateUrl: './tweet-feed.component.html',
  styleUrls: ['./tweet-feed.component.css'],

  

})
export class TweetFeedComponent implements OnInit {

  constructor() { }
  tweetList:Tweet [] = tweetList;
  
 

  ngOnInit(): void {


    if(localStorage.getItem('tweets')!== null){
      this.tweetList = JSON.parse(localStorage.getItem('tweets'));
      }else{
        this.tweetList= this.tweetList;
      }
  }



  

}

