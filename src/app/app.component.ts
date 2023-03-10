import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <ul>
      <li><a routerLink="/premier">Premier Composant</a></li>
      <li><a routerLink="/deuxieme">Deuxième Composant</a></li>
      <li><a routerLink="/articles">Articles</a></li>
      <li><a routerLink="/salles">Salles</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge9-FaresBedoui';
}
