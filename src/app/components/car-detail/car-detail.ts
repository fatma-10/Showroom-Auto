
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-car-detail',
  imports: [],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css',
})
export class CarDetail {
  @Input({ required: true }) car!: Auto;
  @Output() onBack = new EventEmitter<void>();
}
