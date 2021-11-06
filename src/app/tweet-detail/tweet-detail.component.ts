import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tweetList } from '../feedList';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {

  id: any;
  tweetList = tweetList;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(ok =>{
      this.id = ok["Id"];
      console.log(this.id);
    })
  }


  ngOnInit(): void {
    if(localStorage.getItem('tweets')!== null){
      this.tweetList = JSON.parse(localStorage.getItem('tweets'));
      }else{
        this.tweetList= [
          {
            content: "YOU season 3 will be released tommorrow. Who's excited?!",
            hashtag: "#YOU #NETFLIX"
        },
        {
            content: "The subway was stopped this morning, yet again! I'm tired !",
            hashtag: "#late #subway"
        },
        {
            content: "Spooky season is here, have you chosen your halloween costume yet?",
            hashtag: "#Halloween #Costume"
        }
        ];
      }
  }

  onDelete(id:any){
    console.log(id, "on delete");

    // this.router.navigate(['/']);
    this.tweetList.splice(id, 1);
    localStorage.setItem('tweets', JSON.stringify(this.tweetList));
  }

}
