import { Component, OnInit } from '@angular/core';
import {Article} from "../../model/article";
import {Http} from "@angular/http";
import {ArticleService} from "../service/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {
    ListeArticles :any ;
    motCle:string="";
    page:number=0 ;
    size:number=4 ;
    pages:Array<number>;

    constructor(public http : Http,
                public articleService : ArticleService,
                public  router  : Router) {  }

  ngOnInit() {
  }

    searchArticle(){
         this.articleService.searchArticle(this.motCle, this.page, this.size)
             .subscribe(data=>{
                 this.ListeArticles = data
                 this.pages = new Array(data.totalPages)
             },err=>{
                 console.log(err)
             })
    }


    EditArticle(id:number){
      this.router.navigate(['edit-article',id])
    }

    OnDelete(a:Article){
      let confirm = window.confirm('voulez-vous vraiment supprimer cet article')

            if(confirm){
          this.articleService.SuppArticle(a.id)
              .subscribe(data=>{
                  this.ListeArticles.content.splice(this.ListeArticles.content.indexOf(a),1)
                  alert('cet article a été bien supprimer')
              }, err=>{
                  console.log(err)
              })
        }
    }


    gotoPage(indice : number){
      this.page = indice
        this.searchArticle()
    }

}
