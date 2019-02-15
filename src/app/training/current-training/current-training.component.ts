import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  interval: number;
  @Output() stopTraining = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
  onStopTraining() {
    clearInterval(this.interval);
    this.openStopDialog();
    // this.stopTraining.emit();
  }

  openStopDialog() {
    const dialogref = this.dialog.open(StopTrainingDialog, {
      width: '300px',
      data: { progress: this.progress }
    });
  }
}

@Component({
  selector: 'app-stop-training-dialog',
  templateUrl: 'stop-training-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class StopTrainingDialog {
  progress: number;
  constructor(
    dialogref: MatDialogRef<StopTrainingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.progress = data.progress;
  }
}
