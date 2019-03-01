import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingDialog } from './StopTrainingDialog';

export interface DialogData {
  progress: number;
}

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  interval: any;
  exCompleted: boolean;

  @Output() stopTraining = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.startOrResumeExercise();
  }

  startOrResumeExercise() {
    this.interval = setInterval(() => {
      this.progress = this.progress + 1;
      this.exCompleted = false;
      if (this.progress >= 100) {
        clearInterval(this.interval);
        this.exCompleted = true;
      }
    }, 1000);
  }

  StopTraining() {
    clearInterval(this.interval);
    this.stopTraining.emit();
  }

  openStopDialog() {
    clearInterval(this.interval);
    const dialogref = this.dialog.open(StopTrainingDialog, {
      width: '300px',
      data: { progress: this.progress }
    });

    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.StopTraining();
      } else {
        this.startOrResumeExercise();
      }
    });
  }
}
