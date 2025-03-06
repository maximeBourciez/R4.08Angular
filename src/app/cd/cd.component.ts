import {Component, Input} from '@angular/core';
import { Cd } from '../models/cd.model';
import {CdsService} from '../services/cds.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {
  @Input() Cd!: Cd;
  leCd!: Cd;
  idCd!: number;

  // Constructeur
  constructor(private cdService: CdsService, private route: ActivatedRoute) {}

  // Méthode pour afficher un unique Cd
  ngOnInit() {
    this.idCd = this.route.snapshot.params['id'];

    if(this.idCd !== undefined){
      this.cdService.getCdById(+this.idCd).subscribe(cd => {this.leCd = cd});
    }
    else{
      this.leCd = this.Cd;
    }
  }



  // Méthode de modification de la quantité
  onAddCd() : void {
    this.leCd.quantite++;
  }
}
