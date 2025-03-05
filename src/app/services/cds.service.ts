import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  // Méthodes
  getAllCds(){
    return [
      {
        id: 1,
        titre: 'The Dark Side of the Moon',
        auteur: 'Pink Floyd',
        prix: 10,
        image: 'https://www.posters.fr/media/catalog/product/cache/cb3faf85ecb1e071fdba48f981c86454/p/i/pink-floyd-dark-side-of-the-moon-album-cover-30-5x30-5cm.jpg',
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
    ]
  }

  // Méthode de récupération d'un cd par son id
  getCdById(id : number){
    const cd = this.getAllCds().find(c => c.id === id);

    if(cd){
      return cd;
    }else{
      throw new Error('Unable to find cd with id ' + id);
    }
  }
}
