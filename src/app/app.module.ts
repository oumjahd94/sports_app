import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddArticleComponent} from './add-article/add-article.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ArticleService} from "./service/article.service";
import {ListeArticleComponent} from './liste-article/liste-article.component';
import {EditerArticleComponent} from './editer-article/editer-article.component';

// spécification des routes
const appRoutes: Routes = [
    {path: 'add-article', component: AddArticleComponent},
    {path: 'liste-article', component: ListeArticleComponent},
    {path: 'edit-article/:id', component: EditerArticleComponent},
    {path: '', redirectTo: '/add-article', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        AddArticleComponent,
        ListeArticleComponent,
        EditerArticleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ArticleService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
