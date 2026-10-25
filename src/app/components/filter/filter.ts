import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() brands: string[] = [];

  @Input() selectedBrand = '';
  @Input() sortOrder = '';

  @Output() selectedBrandChange = new EventEmitter<string>();
  @Output() sortOrderChange = new EventEmitter<string>();

  onBrandChange(brand: string) {
    this.selectedBrandChange.emit(brand);
  }

  onSortChange(order: string) {
    this.sortOrderChange.emit(order);
  }
}