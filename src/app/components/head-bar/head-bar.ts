import { Component } from '@angular/core';

@Component({ //decaroteur
  imports: [],//contient les composants utilisés dans le composant courant
  selector: 'app-head-bar',//nom du composant, il sera utilisé dans le html comme une balise <app-head-bar></app-head-bar> integr' dans le composant parent
  styleUrl: './head-bar.css',//chemin vers le fichier css du composant
  templateUrl: './head-bar.html',
})
export class HeadBar {}
