import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
  import { Auto } from '../../interfaces/auto';
  import { CarDetail } from '../car-detail/car-detail';
  import { Filter } from '../filter/filter';

  @Component({
    selector: 'app-search-bar',
    imports: [FontAwesomeModule, FormsModule, CarDetail, Filter],
    templateUrl: './search-bar.html',
    styleUrl: './search-bar.css',
  })
export class SearchBar implements OnInit, OnChanges {
    faMagnifyingGlass = faMagnifyingGlass;

    @Input() cars: Auto[] = [];

    selectedAutos: Auto[] = [];
    selectedCar: Auto | null = null;
    searchText = '';

    ngOnInit() {
    this.applyFilters();
  }
  ngOnChanges(changes: SimpleChanges) {
  if (changes['cars'] || changes['selectedBrand']) {
    this.applyFilters();
  }
}

    seeMore(auto: Auto) {
      this.selectedCar = auto;
    }

    backToList() {
      this.selectedCar = null;
    }

      @Input() selectedBrand = '';

    @Output() selectedBrandChange = new EventEmitter<string>();
    sortOrder = '';

  get brands(): string[] {
    return [...new Set(this.cars.map(auto => auto.brand))].sort();
  }

  applyFilters() {
    const search = this.searchText.trim().toLowerCase();

    this.selectedAutos = this.cars.filter(auto => {
      const matchesSearch =
        auto.brand.toLowerCase().includes(search) ||
        auto.model.toLowerCase().includes(search);

      const matchesBrand =
        this.selectedBrand === '' ||
        auto.brand === this.selectedBrand;

      return matchesSearch && matchesBrand;
    });

    if (this.sortOrder === 'priceAsc') {
      this.selectedAutos.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'priceDesc') {
      this.selectedAutos.sort((a, b) => b.price - a.price);
    }
  }

  onBrandFilterChange(brand: string) {
  this.selectedBrand = brand;
  this.selectedBrandChange.emit(brand);
  this.applyFilters();
}

  onPriceSortChange(order: string) {
    this.sortOrder = order;
    this.applyFilters();
  }
  resetFilters(): void {
  this.searchText = '';
  this.sortOrder = '';
  this.selectedBrand = '';
  this.selectedBrandChange.emit('');
  this.applyFilters();
}
  }
