import {Component, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import "rxjs/add/operator/map" ;
import {ArticleService} from "../service/article.service";
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  a: Article = new Article();

  constructor( public artc : ArticleService) {

  }

  ngOnInit() {

  }

  saveArticle(){
    this.artc.saveArticle(this.a)
      .subscribe(data=>{
        this.a = data  ;
      }, err=>{
        console.log(err)
      })
  }

  searchArticle(){

  }

}
