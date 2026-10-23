import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar 
{
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() cars:Auto[]=[];
  @Output() onSeeMore = new EventEmitter<Auto>();
  selectedAutos: Auto[] = [];

  selectAutos(selectedBrand: string) 
  {
    if (selectedBrand) {
      this.selectedAutos = this.cars.filter(
        auto => auto.brand.toLocaleLowerCase().startsWith(selectedBrand.toLocaleLowerCase()));
    } else {
      this.selectedAutos =this.cars;
    }
  }

  seeMore(auto: Auto)
  {
    this.onSeeMore.emit(auto);
  } 
}   