import {Component, OnInit} from '@angular/core';
import { Cd } from '../models/cd.model';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCdComponent implements OnInit {
  // Attributs
  listCd! : Cd[];

  // Méthode à l'initialisation
  ngOnInit(): void {
    this.listCd = [
      {
        id: 1,
        titre: 'The Dark Side of the Moon',
        auteur: 'Pink Floyd',
        prix: 10,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/220px-The_Dark_Side_of_the_Moon_Cover.svg.png',
        dateSortie: new Date(1973, 3, 1),
        quantite: 1
      },
      {
        id: 2,
        titre: 'Pulse',
        auteur: 'Pink Floyd',
        prix: 10,
        image: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateSortie: new Date(1974, 4, 11),
        quantite: 2,
        onSale: true
      },
      {
        id: 3,
        titre: 'Pulsex',
        auteur: 'Pink Floyd',
        prix: 1000,
        image: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateSortie: new Date(1984, 6, 20),
        quantite: 0
      }
    ];
  }

}
