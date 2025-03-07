import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cd} from '../models/cd.model';
import {CdsService} from '../services/cds.service';
import {Router} from '@angular/router';

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
  constructor(private builder: FormBuilder, private cdService: CdsService, private router: Router) {}

  // méthodes
  ngOnInit() {
    this.imageRegEx = new RegExp("https?:\/\/.*\.$")

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


  // Gestion des soumissions
  onSubmit() {

    // Récupérer les données
    let newCd : Cd = {
      id : 0,
      titre : this.form.get('titre')?.value,
      auteur : this.form.get('auteur')?.value,
      image: this.form.get('image')?.value,
      dateSortie: this.form.get('dateSortie')?.value,
      quantite: this.form.get('quantite')?.value,
      prix: this.form.get('prix')?.value,
      onSale : false
    }

    // Envoyer les données
    this.cdService.addCD(newCd).subscribe({
      next: (cd) => {
        this.router.navigateByUrl('/catalog'); // Redirection après ajout
      },
      error: (err) => {
        console.error(`Erreur lors de l'ajout du CD : ${err}`);
        alert("Désolé, le CD n'a pas pu être ajouté");
      }
    });
  }
}
