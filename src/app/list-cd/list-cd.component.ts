import {Component, OnInit} from '@angular/core';
import { Cd } from '../models/cd.model';
import {CdsService} from '../services/cds.service';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCdComponent implements OnInit {
  // Attributs
  listCd! : Cd[];

  // Constructeur
  constructor(private cdService : CdsService) { }

  // Méthode à l'initialisation
  ngOnInit(): void {
    this.listCd = this.cdService.getAllCds();
  }

}
