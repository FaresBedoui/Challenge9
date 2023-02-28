import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './mon-premier-composant/mon-premier-composant.component';
import { MonDeuxiemeComposantComponent } from './mon-deuxieme-composant/mon-deuxieme-composant.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorsComponent } from './errors/errors.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { SalleComponent } from './salle/salle.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'premier', component: MonPremierComposantComponent },
  { path: 'deuxieme', component: MonDeuxiemeComposantComponent },
  { path: 'salles', component: SallesListComponent },
  { path: 'salles/:id', component: SalleComponent },
  { path: '404', component: ErrorsComponent },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    MonDeuxiemeComposantComponent,
    ArticlesComponent,
    ErrorsComponent,
    SallesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
