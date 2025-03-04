export class Cd{
  // Attributs
  id! : number;
  titre!: string;
  auteur!: string;
  prix!: number;
  image!: string;
  dateSortie!: Date;
  quantite!: number;
  onSale? : boolean;

  // Constructeur
  constructor(id: number, titre: string, auteur: string, prix: number, image: string, dateSortie: Date, quantite: number, onSale: boolean) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.prix = prix;
    this.image = image;
    this.dateSortie = dateSortie;
    this.quantite = quantite;
    if(onSale !== undefined) {
      this.onSale = onSale;
    }
  }
}
