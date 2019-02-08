import {Component, OnInit} from '@angular/core';
import {Personnel} from './personnel';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  personnels: Personnel[];
  newPersonnel: Personnel = new Personnel();

  constructor() {
    this.personnels = [
      {nom: 'Mohamed ben salah', adresse: 'Sfax', email: 'medbensalah@gmail.com', cin: '01234567'},
      {nom: 'Khaled bouhhaja', adresse: 'Ariana', email: 'Khaledbouhajja@gmail.com', cin: '02345678'},
      {nom: 'Eymen ben foulen', adresse: 'Tunis', email: 'eymen@esprit.tn', cin: '02345698'},
    ];
  }

  ngOnInit() {
  }

  deletePersonnel(p) {
    const index: number = this.personnels.indexOf(p);
    console.log(index);
    this.personnels.splice(index, 1);
  }

  addPersonnel(newPersonnel) {
    let perso = new Personnel();
    perso.nom = newPersonnel.nom;
    perso.cin = newPersonnel.cin;
    perso.adresse = newPersonnel.adresse;
    perso.email = newPersonnel.email;
    this.personnels.push(perso);
    this.newPersonnel.nom = null;
    this.newPersonnel.cin = null;
    this.newPersonnel.adresse = null;
    this.newPersonnel.email = null;
  }

}
