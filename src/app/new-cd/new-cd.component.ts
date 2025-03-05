import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cd} from '../models/cd.model';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCdComponent {

  // Attributs
  form!: FormGroup;
  currentCd! : Cd;
  imageRegEx?: RegExp;

  // Constructeur
  constructor(private builder: FormBuilder) {}

  // méthodes
  ngOnInit() {
    this.imageRegEx = new RegExp("https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$")

    // Builder du formulaire
    this.form = this.builder.group({
      titre: ['', [Validators.required, Validators.minLength(6)]],
      auteur: ['', [Validators.required, Validators.minLength(6)]],
      image: ['', [Validators.required, Validators.pattern(this.imageRegEx)]],
      prix: ['', [Validators.required, Validators.min(0)]],
      quantite: ['', [Validators.required, Validators.min(0)]],
      dateSortie: ['', [Validators.required, Validators.min(0)]],
    },
    {updateOn: 'blur'})

    // Ecouteur de chnagements
    this.form.valueChanges.subscribe((value) => {
      this.currentCd = {
        id: 0,
        titre: value.titre,
        auteur: value.auteur,
        image: value.image,
        dateSortie: value.dateSortie,
        quantite: value.quantite,
        prix: value.prix,
        onSale : false
      };
    })
  }

  // Gestiond des inputs et de la retrascription


  // Gestion des soumissions
  onSubmit() {

  }
}
