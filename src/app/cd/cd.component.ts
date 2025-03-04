import {Component, Input} from '@angular/core';
import { Cd } from '../models/cd.model';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {
  @Input() Cd!: Cd;

  // Méthode de modification de la quantité
  onAddCd() : void {

  }
}
