import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SallesListComponent } from '../salles-list/salles-list.component';
import { Salle } from '../salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  salle: Salle | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // récupérer l'ID de la salle depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // instancier une nouvelle instance de la classe SallesListComponent
    const sallesListComponent = new SallesListComponent();

    // chercher la salle correspondante dans la liste
    this.salle = sallesListComponent.listeSalles.find(s => s.id === id);
  }
}
