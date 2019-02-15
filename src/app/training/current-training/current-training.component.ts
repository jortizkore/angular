import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  interval: number;
  @Output() stopTraining = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
  onStopTraining() {
    this.progress = 0;
    clearInterval(this.interval);
    this.stopTraining.emit();
  }

}
