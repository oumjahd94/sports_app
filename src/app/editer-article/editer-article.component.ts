import {Component, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import {ArticleService} from "../service/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-editer-article',
    templateUrl: './editer-article.component.html',
    styleUrls: ['./editer-article.component.css']
})
export class EditerArticleComponent implements OnInit {


    a: Article = new Article()
    idArticle: number;

    constructor(public  articleService: ArticleService,
                public  router: Router,
                public activeRoute: ActivatedRoute) {

        this.idArticle = this.activeRoute.snapshot.params['id']
    }

    ngOnInit() {
        this.articleService.searchById(this.idArticle)
            .subscribe(data => {
                this.a = data;
            }, err => {
                console.log(err)
            })
    }


    updateArticle() {
        this.articleService.MiseAjourArticle(this.a)
            .subscribe(data => {
                alert("la mise à jour à été bien effectuée ")
                this.router.navigate(['liste-article'])
            }, err => {
                console.log(err)
            })
    }
}
