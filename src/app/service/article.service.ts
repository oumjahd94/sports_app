import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Article} from "../../model/article";


@Injectable()
export class ArticleService {
    constructor(public http: Http) {

    }

    saveArticle(a: Article) {
        return this.http.post("http://localhost:8080/ajouterArticle", a)
        // .map() ;
            .map(resp => resp.json());

    }

    searchArticle(motCle: string, page: number, size: number) {

        return this.http.get("http://localhost:8080/chercherArticle?motCle=" + motCle
            + "&size=" + size + "&page=" + page)
            .map(resp => resp.json());
    }

    searchById(id: number) {

        return this.http.get("http://localhost:8080/Listearticles/"+id)
            .map(resp => resp.json());
    }


    MiseAjourArticle(a: Article) {
        return this.http.put("http://localhost:8080/MettreAjourArticle/" + a.id, a)
            .map(resp => resp.json());
    }


    SuppArticle(id:number){
        return this.http.delete("http://localhost:8080/effacerArticle/"+id)
            .map(resp=>resp.json());
    }

}
