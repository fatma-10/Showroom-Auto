
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head-bar',
  imports: [],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.css',
})
export class HeadBar {
  @Input() brands: string[] = [];
  @Input() selectedBrand = '';

  @Output() brandSelected = new EventEmitter<string>();

  selectBrand(brand: string) {
    this.brandSelected.emit(
      this.selectedBrand === brand ? '' : brand
    );
  }
}
