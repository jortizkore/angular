import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onTraining = false;
  @Output() stopTraining = new  EventEmitter;

  constructor() {}

  ngOnInit() {}

  train() {
    this.onTraining = true;
  }

  onStopTraining() {
    this.onTraining = false;
  }
}
