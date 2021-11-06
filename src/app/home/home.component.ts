import { Component, OnInit } from '@angular/core';
import { Tweet } from '../feedList';
import { tweetList } from '../feedList';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  error:any;

  tweetContent: any;

  tweetHashtag: any;

  tweetList : Tweet[] = tweetList;



  onAdd(){
    console.log(this.tweetContent);

    let obj = new Tweet();
    console.log(obj);

    obj.content = this.tweetContent;
    obj.hashtag = this.tweetHashtag;

    if(obj.content && obj.hashtag){
      this.tweetList.unshift(obj);
      console.log(this.tweetList, "après unshift");
      this.error=" ";
      localStorage.setItem('tweets',JSON.stringify(this.tweetList));
      
    }else{
      this.error= "Veuillez remplir tous les champs."
    }
  }
}
