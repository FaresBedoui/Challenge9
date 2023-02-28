import { Component } from '@angular/core';
import { Salle } from '../salle';

@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent {
  public listeSalles:Salle[] = [
    {id : 1, nom : 'éléctro mecanique',  capacite : 30 } ,
    {id:2,nom:'Genie civile',capacite:50}, 
    {id:3,nom:'IOT', capacite:100}, 
    {id:4,nom:'Informatique mecanique', capacite:10}, 
    {id:5,nom:'BI', capacite:50}, 
  ] 

}
